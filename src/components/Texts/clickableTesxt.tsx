// In components/forms/clickableText.tsx

import React from 'react';
import { Text, TouchableOpacity, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { Styles } from '../../../styles/Global';

interface ClickableTextProps {
    onActionPress?: (event: GestureResponderEvent) => void;
    mainText?: string;
    actionText?: string;
    style?: StyleProp<ViewStyle>;


}

const ClickableText : React.FC<ClickableTextProps> = ({ mainText, actionText, onActionPress, style }) => {
  return (
    <TouchableOpacity style={[Styles.textContainer, style]} onPress={onActionPress}>
      {mainText && <Text style={Styles.mainText}>{mainText}</Text>}
      <Text style={[Styles.actionText, style]}>{actionText}</Text>
    </TouchableOpacity>
  );
};


export default ClickableText;