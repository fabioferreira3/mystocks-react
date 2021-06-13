import { Stock } from "./stockTypes";

export interface Transaction {
  id?: string;
  wallet_id: string;
  stock_id: string;
  date: string;
  amount: string;
  unit_price: number;
  taxes: number;
  type: string;
}

export interface TransactionResource {
  id?: string;
  stock: Stock;
  type: string;
  amount: string;
  taxes: string;
  unit_price: string;
  total_price: string;
  date: string;
}
