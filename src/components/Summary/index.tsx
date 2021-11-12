import { useTransaction } from "../../hooks/useTransactions";

import { Container } from "./style";

import inCome from "../../assets/Entradas.svg" 
import inOut from "../../assets/Saídas.svg" 
import Total from "../../assets/Total.svg" 

export  function Summary() {
    const {transactions} = useTransaction()

    const summary = transactions.reduce((acc, transaction) => {
            if(transaction.type === "deposit"){
                acc.deposits += transaction.amount;
                acc.total += transaction.amount;
            }else{
                acc.withdraw += transaction.amount;
                acc.total -= transaction.amount;
            }

            return acc
    }, {
        deposits: 0,
        withdraw: 0,
        total: 0,
    })
    
    return (
        <Container>

            <div>
                <header>
                    <img src={inCome} alt="Entradas" />
                    <p>Entradas</p>
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <img src={inOut} alt="Saídas" />
                    <p>Saídas</p>
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(summary.withdraw)}
                </strong>
            </div>

            <div className="Total-backgournd">
                <header>
                    <img src={Total} alt="Total" />
                    <p>Total</p>
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(summary.total)}
                </strong>
            </div>

            
        </Container>
    )
}
