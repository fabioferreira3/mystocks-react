import React, { useState } from "react";
import {
  HiArrowCircleUp,
  HiArrowCircleDown,
  HiPencilAlt,
  HiTrash,
} from "react-icons/hi";
import { TransactionResource } from "../types/transactionTypes";

import { BRL } from "./Currency";
import Modal from "./Modal";
import TransactionForm from "./TransactionForm";

interface TransactionProps {
  transaction: TransactionResource;
}

const Transaction = ({ transaction }: TransactionProps) => {
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);
  return (
    <>
      <div className="grid grid-cols-7 flex items-center py-4 border-t border-lightGray rounded">
        <div className="flex items-center">
          {transaction.type === "sell" ? (
            <HiArrowCircleDown
              color="red"
              size="3em"
              className="border-lightGray border-2 rounded-3xl"
            />
          ) : (
            <HiArrowCircleUp
              color="green"
              size="3em"
              className="border-lightGray border-2 rounded-3xl"
            />
          )}
          <div className="flex flex-col ml-2">
            <div className="text-white font-bold">{transaction.stock.name}</div>
            <div className="text-white text-xs">{transaction.type}</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white font-bold">{transaction.amount}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-white font-bold">
            <BRL value={transaction.unit_price} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white font-bold">
            <BRL value={transaction.taxes} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white font-bold">
            <BRL value={transaction.total_price} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white font-bold">-</div>
        </div>
        <div className="flex justify-around">
          <div
            className="text-white font-bold cursor-pointer"
            onClick={() => setTransactionModalOpen(!transactionModalOpen)}
          >
            <HiPencilAlt size={"1.5em"} />
          </div>
          <div className="text-white font-bold cursor-pointer">
            <HiTrash size={"1.5em"} />
          </div>
        </div>
      </div>
      {transactionModalOpen && (
        <Modal
          setVisibility={setTransactionModalOpen}
          defaultOpen={transactionModalOpen}
          title={"Edit Transaction"}
        >
          <TransactionForm
            type="update"
            cancelEvent={() => setTransactionModalOpen(false)}
            submitCallback={() => {}}
            initialData={transaction}
          />
        </Modal>
      )}
    </>
  );
};

export default React.memo(Transaction);
