Sure, here's a simplified version of what your main `App.js` file might look like in a personal expense tracker app:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/expenses')
      .then(response => {
        setExpenses(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const addExpense = expense => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = id => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Alert />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
```

Please note that this is a simplified example and you would need to create the `ExpenseForm`, `ExpenseList`, and `Alert` components, as well as setup your API endpoint on Node.js and MongoDB. You also need to handle form validation and more comprehensive error handling in a real-world scenario.