import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  broad?: boolean;
  action?: (numberText: string) => void;
}

export const ButtonCalc: FC<Props> = ({
  text,
  color = '#2D2D2D',
  broad = false,
  action,
}) => {
  return (
    <TouchableOpacity onPress={() => action && action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: broad ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
