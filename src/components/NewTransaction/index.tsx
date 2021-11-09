import { useState } from "react"
import Modal from "react-modal"
import closeBtn from "../../assets/Botão - Fechar.svg"
import incomeImg from "../../assets/Entradas.svg"
import outcomeImg from "../../assets/Saídas.svg"

import {Container, RadiosButtom, TransactionTypeContent} from "./style"

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

    const [type, setType] = useState("deposit")

    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose} 
        overlayClassName="react-modal-overplay"
        className="react-modal-content"
    >
        <button 
            type="button" 
            onClick={onRequestClose}
            className="react-modal-close"
        >
            <img src={closeBtn} alt="Botão Fechar"/>
        </button>

        <Container>
            <h2>Cadastarar transações</h2>

            <input 
                placeholder="Título
            "/>

            <input 
                type="number"
                placeholder="Valor"
            />

            <TransactionTypeContent>
                <RadiosButtom
                    type="button"
                    onClick={()=>{setType("deposit")}}
                    isActive={type == "deposit"}
                >
                    <img src={incomeImg} alt="Entradas" />
                    <span>Entrada</span>
                </RadiosButtom>

                <RadiosButtom
                    type="button"
                    onClick={()=>{setType("withdraw")}}
                    isActive={type == "withdraw"}
                >

                    <img src={outcomeImg} alt="Saídas" /> 
                    <span>Saída</span>
                </RadiosButtom>
            </TransactionTypeContent>

            <input
                placeholder="Categoria"
            />

            <button type="submit"> Cadastrar </button> 

        </Container>
    </Modal>
    )
}
