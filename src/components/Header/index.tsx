import logo from "../../assets/logo.svg"

import { Container, Content } from './styled'

interface ModalProps{
    onOpenNewTransactionModal: ()=> void;

}

export  function Header({onOpenNewTransactionModal}: ModalProps) {
    return (
        <Container>
            <Content> 
                <img src={logo} alt="logo" />   
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>

            </Content>
        </Container>
    )
}
 