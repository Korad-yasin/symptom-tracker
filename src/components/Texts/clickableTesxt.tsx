// In components/forms/clickableText.tsx

import React from 'react';
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

interface ClickableTextProps {
    onActionPress: (event: GestureResponderEvent) => void;
    mainText?: string;
    actionText: string;
    style?: StyleProp<ViewStyle>;


}

const ClickableText : React.FC<ClickableTextProps> = ({ mainText, actionText, onActionPress, style }) => {
  return (
    <TouchableOpacity style={[styles.textContainer, style]} onPress={onActionPress}>
      {mainText && <Text style={styles.mainText}>{mainText}</Text>}
      <Text style={[styles.actionText, style]}>{actionText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',

  },
  mainText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  actionText: {
    fontSize: 15,
    color: '#9A7014',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default ClickableText;