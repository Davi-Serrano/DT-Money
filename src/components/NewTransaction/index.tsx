import Modal from "react-modal"
import closeBtn from "../../assets/Botão - Fechar.svg"
import {Container} from "./style"

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
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

            <input
                placeholder="Categoria"
            />

            <button type="submit"> Cadastrar </button> 

        </Container>
    </Modal>
    )
}
