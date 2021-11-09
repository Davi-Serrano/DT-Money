import {useState} from "react"
import Modal from "react-modal"
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard"
import { NewTransactionModal } from "./components/NewTransaction";

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

    <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    />

     <GlobalStyle />
    </div>
  );
}

export default App;
