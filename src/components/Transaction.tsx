import {
  HiArrowCircleUp,
  HiArrowCircleDown,
  HiDotsVertical,
} from "react-icons/hi";

import { BRL } from "./Currency";

interface TransactionProps {
  transaction: any;
}

const Transaction = ({ transaction }: TransactionProps) => {
  console.log(transaction);
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
            <div className="text-white font-bold">{transaction.stock}</div>
            <div className="text-white text-xs">{transaction.type}</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white font-bold">{transaction.amount}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-white font-bold">
            R$ <BRL value={transaction.unit_price} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white font-bold">
            R$ <BRL value={transaction.taxes} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white font-bold">
            R$ <BRL value={transaction.total_price} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white font-bold">-</div>
        </div>
        <div className="flex flex-col">
          <div className="text-white font-bold">
            <HiDotsVertical />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
