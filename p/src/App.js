import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import './App.css';


const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="app">
      <h1>Flartiron Transaction App</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;

