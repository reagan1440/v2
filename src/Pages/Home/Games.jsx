import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Games component
function Games() {
  const navigate = useNavigate();

  // Function to navigate back to home
  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Games Component</h1>
      <button onClick={goBack}>Go Back</button>
      <NumberGuessingGame />
    </div>
  );
}

// NumberGuessingGame component
function NumberGuessingGame() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  }

  function handleInputChange(event) {
    setGuess(event.target.value);
  }

  function handleGuess() {
    const userGuess = parseInt(guess);

    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number.');
    } else if (userGuess === randomNumber) {
      setMessage('Congratulations! You guessed the correct number.');
    } else if (userGuess < randomNumber) {
      setMessage('Too low! Try a higher number.');
    } else {
      setMessage('Too high! Try a lower number.');
    }
  }

  function handleReset() {
    setGuess('');
    setRandomNumber(generateRandomNumber());
    setMessage('');
  }

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100:</p>
      <input type="number" value={guess} onChange={handleInputChange} />
      <button onClick={handleGuess}>Guess</button>
      <button onClick={handleReset}>Reset</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Games;

