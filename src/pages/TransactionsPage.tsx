import { useCallback, useEffect, useState } from "react";

import Modal from "../components/Modal";
import { PageHeader } from "../components/PageHeader";
import TransactionContainer from "../components/TransactionContainer";
import TransactionForm from "../components/TransactionForm";
import { getTransactions } from "../services/stock";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<any>(null);
  const [transactionModalOpen, setTransactionModalOpen] =
    useState<boolean>(false);
  const fetchTransactions = useCallback(async () => {
    const response = await getTransactions("2021");
    const { data } = response;
    setTransactions(Object.entries(data));
  }, []);

  useEffect(() => {
    fetchTransactions().then();
  }, [fetchTransactions]);

  return (
    <>
      <PageHeader title="Transactions" />
      <div className="flex justify-start px-6 py-6">
        <button
          className="bg-purple text-white font-bold pl-6 pr-6 pt-2 pb-2"
          onClick={() => setTransactionModalOpen(true)}
        >
          Add Transaction
        </button>
      </div>
      <div className="px-6 py-6">
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
      {transactionModalOpen && (
        <Modal
          setVisibility={setTransactionModalOpen}
          defaultOpen={transactionModalOpen}
          title={"Add Transaction"}
        >
          <TransactionForm
            type="new"
            cancelEvent={() => setTransactionModalOpen(false)}
            submitCallback={() => fetchTransactions()}
          />
        </Modal>
      )}
    </>
  );
};

export default TransactionsPage;
