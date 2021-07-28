import { useCallback, useEffect, useState } from "react";
import { groupBy, map } from "lodash";

import Modal from "../components/Modal";
import { PageHeader } from "../components/PageHeader";
import Paginator from "../components/Paginator";
import TransactionContainer from "../components/TransactionContainer";
import TransactionForm from "../components/TransactionForm";
import { getTransactions } from "../services/stock";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<any>(null);
  const [transactionModalOpen, setTransactionModalOpen] =
    useState<boolean>(false);
  const [pagination, setPagination] = useState({
    pageCount: 0,
    currentPage: 1,
  });

  const fetchTransactions = useCallback(async (page: number) => {
    const response = await getTransactions("2021", null, page);
    const transactionsData = response.data.data;
    setPagination({
      currentPage: page,
      pageCount: response.data.last_page,
    });
    setTransactions(groupBy(transactionsData, "date"));
  }, []);

  useEffect(() => {
    fetchTransactions(pagination.currentPage).then();
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
        <Paginator
          className="mb-6"
          pageCount={pagination.pageCount}
          onPageChange={(page: any) => {
            fetchTransactions(page.selected + 1);
          }}
        />
        {transactions &&
          map(transactions, (transactionGroup: any, idx: any) => {
            return (
              <TransactionContainer
                key={idx}
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
            submitCallback={() => fetchTransactions(pagination.currentPage)}
          />
        </Modal>
      )}
    </>
  );
};

export default TransactionsPage;
