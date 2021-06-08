import { useCallback, useEffect, useState } from "react";
import { RiCalendarFill } from "react-icons/ri";
import { HiArrowCircleUp, HiArrowCircleDown } from "react-icons/hi";

import { PageHeader } from "../components/PageHeader";
import { getTransactions } from "../services/stock";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<any>(null);
  const fetchTransactions = useCallback(async () => {
    const response = await getTransactions("2021");
    const { data } = response;
    setTransactions(Object.entries(data));
  }, []);

  useEffect(() => {
    fetchTransactions().then();
  }, [fetchTransactions]);

  const renderTransactions = useCallback(() => {
    if (transactions) {
      const components = [];
      for (let [key, value] of transactions) {
        components.push(<h1 key={key}>{key}</h1>);
        // console.log(key, value);
      }
      return <div>{components}</div>;
    }
  }, [transactions]);

  return (
    <>
      <PageHeader title="Transactions" />
      <div className="p-4">
        <div className="">
          <div className="flex items-center">
            <RiCalendarFill color="white" className="mr-4" size="2em" />
            <div className="text-white font-bold text-xl">2021-01-04</div>
          </div>
          <div className="bg-white h-px w-full mt-2" />
          <div className="grid grid-cols-7 py-4">
            <div className="text-white font-bold">Type</div>
            <div className="text-white font-bold">Stock</div>
            <div className="text-white font-bold">Unit Price</div>
            <div className="text-white font-bold">Taxes</div>
            <div className="text-white font-bold">Total</div>
            <div className="text-white font-bold">Gain/Loss</div>
          </div>
          <div className="grid grid-cols-7 flex items-center py-4 border-t border-lightGray rounded">
            <div className="flex items-center">
              <HiArrowCircleUp
                color="green"
                size="3em"
                className="border-lightGray border-2 rounded-3xl"
              />
              <div className="flex flex-col ml-2">
                <div className="text-white font-bold">BOVA11</div>
                <div className="text-white text-xs">Amount: 34</div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-white font-bold">R$12,67</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white font-bold">R$1,25</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white font-bold">R$402,34</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white font-bold">R$402,34</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white font-bold">R$402,34</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white font-bold">R$402,34</div>
            </div>
          </div>

          <HiArrowCircleDown
            color="red"
            size="3em"
            className="border-lightGray border-2 rounded-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default TransactionsPage;
