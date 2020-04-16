import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ItemState } from './ItemState';
import { List } from './List';

function App() {
  const testList = [ItemState("Do you homework"),ItemState("Eat a banana"),ItemState(),ItemState()]

  return (
    <div className="App">
      <h1>Habit List</h1>
        <List className="List" items={testList}/>
    </div>
  );
}

export default App;
