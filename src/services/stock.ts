import { Transaction } from "../types/transactionTypes";
import api from "./api";

export const getStocks = () => {
  return api.get("/stocks");
};

export const getPositions = () => {
  return api.get("/positions");
};

export const getTransactions = (year: string, month = null, page: number) => {
  return api.get(`/transactions?page=${page}`, {
    params: {
      year,
      month,
    },
  });
};

export const makeTransaction = (transactionData: Transaction) => {
  return api.post("/transaction", transactionData);
};

export const updateTransaction = (transactionData: Transaction) => {
  return api.put(`/transaction/${transactionData.id}`, transactionData);
};
