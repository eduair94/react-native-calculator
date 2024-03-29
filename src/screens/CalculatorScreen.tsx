import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
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
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{previousNumber}</Text>
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.result}>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={deleteRightNumber} />
        <ButtonCalc text="/" color="#FF9427" action={btnDivide} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#FF9427" action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={btnSubtract} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={btnAdd} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" action={buildNumber} broad />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
