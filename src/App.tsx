import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard/Index';
import { TransactionProvider } from './hooks/useTransactions';
import { Header } from './components/Header/Index';
import { NewTransactionModal } from './components/NewTransactionModal/Index';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }   

  return (
    <TransactionProvider>
      <Header OnOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard/>
      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}