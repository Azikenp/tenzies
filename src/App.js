import React from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import './App.css';

 
export default function App() {
  
  const [dice, setDice] = React.useState(allNewDice());


  function allNewDice(){
    const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push({
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid(),
      })
    }
    return newDice
  }

  function rollDice(){
    setDice(allNewDice())
  }
  console.log(allNewDice())

  const diceElements = dice.map(die => <Die 
    key={die.id} 
    value={die.value} 
    isHeld={die.isHeld}
    />)

  return (
    <main>
      <div className="dice--container">
        {diceElements}
      </div>
      <button onClick={rollDice} className="roll--dice">Roll</button>
    </main>
  )
}

