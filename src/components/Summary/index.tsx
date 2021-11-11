import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./style";

import inCome from "../../assets/Entradas.svg" 
import inOut from "../../assets/Saídas.svg" 
import Total from "../../assets/Total.svg" 

export  function Summary() {
    const {transactions} = useContext(TransactionsContext)
    
    return (
        <Container>

            <div>
                <header>
                    <img src={inCome} alt="Entradas" />
                    <p>Entradas</p>
                </header>
                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    <img src={inOut} alt="Saídas" />
                    <p>Saídas</p>
                </header>
                <strong>R$ -500,00</strong>
            </div>

            <div className="Total-backgournd">
                <header>
                    <img src={Total} alt="Total" />
                    <p>Total</p>
                </header>
                <strong>R$ 5000,00</strong>
            </div>

            
        </Container>
    )
}
