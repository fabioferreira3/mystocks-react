import api from "./api";

interface TransactionData {
  wallet_id: string;
  stock_id: string;
  date: string;
  amount: string;
  unit_price: number;
  taxes: number;
  type: string;
}

export const getStocks = () => {
  return api.get("/stocks");
};

export const getPositions = () => {
  return api.get("/positions");
};

export const makeTransaction = (transactionData: TransactionData) => {
  return api.post("/transaction", transactionData);
};
