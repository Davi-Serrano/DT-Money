import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TranasctionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({children}: TranasctionsProviderProps){
   
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get("transactions")
        .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput){
        const reposnse = await api.post("/transactions", {
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction }  = reposnse.data;

        setTransactions([
            ...transactions,
            transaction,
        ])
    }


    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}


export function useTransaction(){
    const context = useContext(TransactionsContext);

    return context;
}
