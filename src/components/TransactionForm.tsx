import { useCallback, useEffect, useRef, useState } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as yup from "yup";

import { CurrencyInput } from "./Currency";
import { Input } from "./Input";
import Select from "./Select";
import {
  getStocks,
  makeTransaction,
  updateTransaction,
} from "../services/stock";
import { formatCurrency } from "../helpers/currency";
import { useNotification } from "../hooks/useNotification";
import { Button } from "./Button";
import { TransactionResource } from "../types/transactionTypes";

interface TransactionFormProps {
  initialData?: TransactionResource;
  cancelEvent?: Function;
  submitCallback?: Function;
  type: "new" | "update";
}

const TransactionForm = ({
  initialData,
  cancelEvent,
  submitCallback,
  type,
}: TransactionFormProps) => {
  const [saving, setSaving] = useState(false);
  const [stocks, setStocks] = useState([]);
  const { success, error } = useNotification();
  const formRef = useRef<FormHandles>(null);

  const fetchStocks = useCallback(async () => {
    try {
      const response = await getStocks();
      const stocksMap = response.data.map((stock: any) => {
        return {
          value: stock.id,
          label: stock.code,
        };
      });
      setStocks(stocksMap);
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchStocks().then();
  }, [fetchStocks]);

  const handleSubmit = useCallback(async (data) => {
    try {
      setSaving(true);
      let schema = yup.object().shape({
        unit_price: yup.string().required(),
        taxes: yup.string().required(),
        stock_id: yup.string().required(),
        type: yup.string().required(),
        date: yup.date().required(),
      });
      await schema.validate(data);
      const formData = {
        ...data,
        wallet_id: process.env.REACT_APP_WALLET_ID,
        unit_price: formatCurrency(data.unit_price),
        taxes: formatCurrency(data.taxes),
      };
      if (type === "update") {
        formData.id = initialData?.id;
        await updateTransaction(formData);
      } else {
        await makeTransaction(formData);
      }

      if (submitCallback) {
        submitCallback();
      }
      success("Success", "Operation executed successfully");
    } catch (err) {
      error("Error", "Error while executing the operation");
    } finally {
      setSaving(false);
    }
  }, []);

  const typeOptions = [
    {
      value: "buy",
      label: "Buy",
    },
    {
      value: "sell",
      label: "Sell",
    },
  ];

  const getTypeOption = (value: any) => {
    const found = typeOptions.find((option: any) => {
      return option.value === value;
    });
    return found ?? null;
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex">
        <Select
          name="type"
          options={typeOptions}
          className="w-1/2 mt-4 text-white font-bold"
          placeholder="Type"
          defaultValue={initialData ? getTypeOption(initialData.type) : null}
        />
        <Select
          name="stock_id"
          options={stocks}
          className="w-1/2 mt-4 text-white font-bold"
          placeholder="Stock"
          defaultValue={
            initialData
              ? { value: initialData.stock.id, label: initialData.stock.name }
              : null
          }
        />
      </div>
      <div className="flex">
        <Input
          type="number"
          name="amount"
          className="w-1/2 bg-gray mt-4 text-white font-bold"
          placeholder="Amount"
          defaultValue={initialData?.amount}
        />
        <CurrencyInput
          name="unit_price"
          placeholder="Unit Price"
          defaultValue={initialData?.unit_price}
        />
      </div>
      <div className="flex">
        <Input
          type="date"
          name="date"
          className="w-1/2 bg-gray mt-4 text-white font-bold"
          defaultValue={initialData?.date}
        />
        <CurrencyInput
          name="taxes"
          placeholder="Taxes"
          defaultValue={initialData?.taxes}
        />
      </div>
      <div className="pt-4 sm:flex sm:flex-row-reverse">
        <Button loading={saving} disabled={saving}>
          Save
        </Button>
        <Button disabled={saving} background="bg-gray" onClick={cancelEvent}>
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default TransactionForm;
