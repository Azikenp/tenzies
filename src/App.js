import React from 'react';
import Die from './components/Die';
import './App.css';



function allNewDice() {
  const randNum = Math.floor((Math.random() * 6 + 1));
  console.log(randNum) 
}
allNewDice()
 
export default function App() {
  return (
    <main>
      <div className="dice--container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main>
  )
}

