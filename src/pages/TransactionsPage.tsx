import { useCallback, useEffect, useState } from "react";
import { groupBy, reverse } from "lodash";

import { PageHeader } from "../components/PageHeader";
import { getTransactions } from "../services/stock";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const fetchTransactions = useCallback(async () => {
    const response = await getTransactions("2021");
    const { data } = response.data;
    console.log(data);
    // console.log(groupByDate);
    setTransactions(data);
  }, []);

  useEffect(() => {
    fetchTransactions().then();
  }, [fetchTransactions]);

  return (
    <>
      <PageHeader title="Transactions" />
      {transactions.length > 0 &&
        transactions.map((transaction: any) => {
          return <h1>{transaction.id}</h1>;
        })}
    </>
  );
};

export default TransactionsPage;
