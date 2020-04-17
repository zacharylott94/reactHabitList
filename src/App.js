import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ItemState } from './ItemState';
import { List } from './List';

function App() {
  const testList = [ItemState("Do you homework"),ItemState("Eat a banana"),ItemState("Go for a walk"),ItemState()]

  return (
    <div className="App">
      <h1>Habit List</h1>
        <List items={testList}/>
    </div>
  );
}





export default App;
