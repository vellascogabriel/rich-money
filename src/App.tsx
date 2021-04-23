import { GlobalStyle } from "./styles/global";
import { useState } from 'react'
import Modal from 'react-modal'

import { NewTransactionModal } from './components/NewTransactionModal'
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard'


Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
    
    function handleOpenTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal}/>
      <GlobalStyle/>

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal}/>
      <Dashboard/>
    </>
  );
}
