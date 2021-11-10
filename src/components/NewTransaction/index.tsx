import { FormEvent, useState } from "react"
import { api } from "../../services/api"
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
    const [title, setTitle] = useState("")
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState("")
    const [type, setType] = useState("deposit")

    function handleCreateNewTransaction (event: FormEvent){
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type
        }

        api.post("/transactions", data)
    }


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

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastarar transações</h2>

            <input 
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input 
                type="number"
                placeholder="Valor"
                value={value}
                onChange={event => setValue(Number(event.target.value))}
            />

            <TransactionTypeContent>
                <RadiosButtom
                    type="button"
                    onClick={()=>{setType("deposit")}}
                    isActive={type === "deposit"}
                    activeColor="green"
                >
                    <img src={incomeImg} alt="Entradas" />
                    <span>Entrada</span>
                </RadiosButtom>

                <RadiosButtom
                    type="button"
                    onClick={()=>{setType("withdraw")}}
                    isActive={type === "withdraw"}
                    activeColor="red"
                >

                    <img src={outcomeImg} alt="Saídas" /> 
                    <span>Saída</span>
                </RadiosButtom>
            </TransactionTypeContent>

            <input
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <button type="submit"> Cadastrar </button> 

        </Container>
    </Modal>
    )
}
