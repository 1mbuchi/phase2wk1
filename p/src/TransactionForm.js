import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && amount !== 0) {
      const newTransaction = {
        id: Date.now(),
        text,
        amount: +amount,
      };
      addTransaction(newTransaction);
      setText('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter transaction description"
        />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div> <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="dd/mm/yyyy"
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
