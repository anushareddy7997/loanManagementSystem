import { Action } from "redux";

export interface SigninFormInputs {
  email: string;
  password: string;
}

export interface SignupFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export type SignupFieldNames = keyof SignupFormInputs;

export interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  userId?: string;
  message?: string;
  error?: string;
}

export interface CreditCard {
  id?: string;
  bankName: string;
  cardNumber: string;
  dueAmount: number;
  holderName: string;
  cardProvider: string;
}

export interface Transaction {
  bankName: string;
  cardNumber: string;
  dueAmount: number;
  date: string;
  userId: string;
}

export interface CardsState {
  loading: boolean;
  message?: string;
  error?: string;
  cards?: CreditCard[];
}

export interface TransactionsState {
  loading: boolean;
  message?: string;
  error?: string;
  transactions?: Transaction[];
}

export interface AuthAction extends Action {
  payload?: Partial<AuthState>;
}

export interface CardsAction extends Action {
  payload?: Partial<CardsState>;
}

export interface TransactionAction extends Action {
  payload?: Partial<TransactionsState>;
}
