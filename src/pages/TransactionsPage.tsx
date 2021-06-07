import { useCallback, useEffect } from "react";
import { PageHeader } from "../components/PageHeader";
import { getTransactions } from "../services/stock";

const TransactionsPage = () => {
  const fetchTransactions = useCallback(async () => {
    const teste = await getTransactions("2021");
    console.log(teste);
  }, []);

  useEffect(() => {
    fetchTransactions().then();
  }, []);
  return (
    <>
      <PageHeader title="Transactions" />
    </>
  );
};

export default TransactionsPage;
