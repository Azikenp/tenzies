import React from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'
import './App.css';

 
export default function App() {
  
const [dice, setDice] = React.useState(allNewDice());
const [tenzies, setTenzies] = React.useState(false);
const [currentScore, setCurrentScore] = React.useState(0);
const [highScoreVal, setHighscoreVal] = React.useState();

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    if(allHeld && allSameValue) {
      setTenzies(true)
    }
  }, [dice]);

  // React.useEffect(() => {
  //   if(currentScore < highScoreVal){
  //     setHighscoreVal(currentScore)
  //   } else {
  //     setHighscoreVal(highScoreVal)
  //   }
  // }, [tenzies])

  // const updateHighScore = function(){
  //   if(highScoreVal > currentScore){
  //     setHighscoreVal(currentScore)
  //   }
  // }


  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: nanoid(),
    }
  }


  function allNewDice(){
    const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
    }
    return newDice
  }


  function rollDice(){
    if(!tenzies){
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld? die: generateNewDie()
      }))
      setCurrentScore(score => score = score + 1)
    } else{
      setTenzies(false)
      setDice(allNewDice())
      setCurrentScore(score => score = 0)
    }
  }
  
  function holdDice(id){
    setDice(oldDice => oldDice.map(die => {
      return die.id ===id? {...die, isHeld: !die.isHeld}: die
    }))
  }

  const diceElements = dice.map(die => <Die 
    key={die.id} 
    value={die.value} 
    isHeld={die.isHeld}
    holdDice={() => holdDice(die.id)}
    />)

  let btnDisplayText = tenzies? "New Game" : "Roll"
  const confetti = tenzies?<Confetti/> : ""

  

  return (
    <main>
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same, Click each die to freeze it at it's current value between rolls</p>
      <div className="dice--container">
        {diceElements}
      </div>
      <button onClick={rollDice} className="roll--dice">
        {btnDisplayText}
      </button>
      <p className='score'>No of Rolls: {currentScore}</p>
      <p className='high--score'>High score: {highScoreVal}</p>
    
    </main>
  )
}

