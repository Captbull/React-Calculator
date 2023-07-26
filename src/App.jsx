import React, { useState } from 'react';
import './App.css';

const App =()=> {
  // syntax to set screen display default value to '0' using state
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

//syntax to set evaliuation or function of = button
  const handleClick = (value) => {
    if (value === '=') {
      try {
        //syntax to evaluate expressions
        const result = eval(expression);

        // syntax to ensure input display as string to avoid error
        setDisplay(result.toString());
        setExpression(result.toString());
      } catch (error) {
        setDisplay('Error');
        setExpression('');
      }
      // syntax to enable 'c' button erase all display
    } else if (value === 'C') {
      setDisplay('0');
      setExpression('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
      setDisplay((prevDisplay) =>
        prevDisplay === '0' ? value : prevDisplay + value
      );
    }
  };

  
  return (
      <div className=' w-96 h-96 bg-lime-200'>
            <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button className=' ' onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
      </div>
  );
}

export default App;
