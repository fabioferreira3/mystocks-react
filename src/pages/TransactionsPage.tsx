import { useCallback, useEffect, useState } from "react";

import { PageHeader } from "../components/PageHeader";
import TransactionContainer from "../components/TransactionContainer";
import { getTransactions } from "../services/stock";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<any>(null);
  const fetchTransactions = useCallback(async () => {
    const response = await getTransactions("2021");
    const { data } = response;
    setTransactions(Object.entries(data));
  }, []);

  const quote = async () => {
    const result = await yahooFinance.quote("BOVA11");
    console.log(result);
  };

  useEffect(() => {
    quote().then();
    fetchTransactions().then();
  }, [fetchTransactions]);

  return (
    <>
      <PageHeader title="Transactions" />
      <div className="p-4">
        {transactions &&
          transactions.map((transactionGroup: any) => {
            return (
              <TransactionContainer
                key={transactionGroup[0]}
                transactionGroup={transactionGroup}
              />
            );
          })}
      </div>
    </>
  );
};

export default TransactionsPage;
