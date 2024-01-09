import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('');
  const [number, setNumber] = useState('100');
  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPreviousNumber('');
    lastOperation.current = undefined;
  };

  const buildNumber = (textNumber: string) => {
    // Do not accept double dot.
    if (number.includes('.') && textNumber === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      // Decimal dot.
      if (textNumber === '.') {
        setNumber(number + textNumber);
        return;
      }
      if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
        return;
      }
      // If number is not 0 and doesn't have a dot
      if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
        return;
      }
      // If number is not 0 and it has a dot
      if (textNumber !== '0' && number.includes('.')) {
        setNumber(number + textNumber);
        return;
      }
      return;
    }
    setNumber(number + textNumber);
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const deleteRightNumber = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      setNumber('0');
      return;
    }
    setNumber(number.slice(0, -1));
  };

  const changeNumberForPrevious = () => {
    let tempNumber = number;
    if (tempNumber.includes('.')) {
      while (tempNumber.endsWith('0')) {
        tempNumber = tempNumber.slice(0, -1);
      }
    }
    if (tempNumber.endsWith('.')) {
      setPreviousNumber(tempNumber.slice(0, -1));
    } else {
      setPreviousNumber(tempNumber);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.divide;
  };

  const btnMultiply = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.multiply;
  };

  const btnSubtract = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.subtract;
  };

  const btnAdd = () => {
    lastOperation.current = Operators.add;
    changeNumberForPrevious();
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);
    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        if (num1 === 0) {
          setNumber('What the heck are you doing?');
        } else {
          setNumber(`${num2 / num1}`);
        }
        break;
    }
    setPreviousNumber('');
  };

  return {
    previousNumber,
    number,
    clean,
    positiveNegative,
    deleteRightNumber,
    btnDivide,
    buildNumber,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
  };
};
