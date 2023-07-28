import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
             
            {transaction.text} ({transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount)} )
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
