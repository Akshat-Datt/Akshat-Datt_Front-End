import React from 'react';
import './App.css';
import List from './components/List';

// creation of array "items"
const items = [
  {
    "text": "Akshat",
  },
  {
    text: "Ayush",
  },
  {
    text: "Harsh",
  },
];

function App() {
  return (
    <div className="App">
      <List items={items}></List>
    </div>
  );
}

export default App;
