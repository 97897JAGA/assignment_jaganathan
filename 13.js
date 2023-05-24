import React, { useState } from 'react';

const CalculatorApp = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = value => {
    if (value === '=') {
      try {
        const calculatedResult = eval(displayValue);
        setResult(calculatedResult);
        setDisplayValue(calculatedResult);
      } catch (error) {
        setResult('Error');
        setDisplayValue('');
      }
    } else if (value === 'C') {
      setResult('');
      setDisplayValue('');
    } else {
      setDisplayValue(prevValue => prevValue + value);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">
          <p>{displayValue}</p>
          <p>{result