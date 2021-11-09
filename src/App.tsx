import {useState} from "react"
import Modal from "react-modal"
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard"

import { GlobalStyle } from "./style/global";

Modal.setAppElement("#root")

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal (){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal (){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <div>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

    <Dashboard />

    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal} 
    >
        <h2>Cadastarar transações</h2>
    </Modal>


     <GlobalStyle />
    </div>
  );
}

export default App;
