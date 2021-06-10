import { HiOutlineCalendar } from "react-icons/hi";
import dayjs from "dayjs";

import Transaction from "./Transaction";

interface TransactionContainerProps {
  transactionGroup: any;
}

const TransactionContainer = ({
  transactionGroup,
}: TransactionContainerProps) => {
  console.log(transactionGroup);
  return (
    <div className="pb-8">
      <div className="flex items-center">
        <HiOutlineCalendar color="white" className="mr-4" size="2em" />
        <div className="text-white font-bold text-xl">
          {dayjs(transactionGroup[0]).format("DD/MM/YYYY")}
        </div>
      </div>
      <div className="bg-white h-px w-full mt-2" />
      <div className="grid grid-cols-7 py-4">
        <div className="text-white font-bold"></div>
        <div className="text-white font-bold">Amount</div>
        <div className="text-white font-bold">Unit Price</div>
        <div className="text-white font-bold">Taxes</div>
        <div className="text-white font-bold">Total</div>
        <div className="text-white font-bold">Profit</div>
        <div className="text-white font-bold"></div>
      </div>
      {transactionGroup[1].map((transaction: any) => {
        return <Transaction key={transaction.id} transaction={transaction} />;
      })}
    </div>
  );
};

export default TransactionContainer;
