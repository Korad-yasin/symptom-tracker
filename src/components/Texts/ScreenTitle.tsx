// In components/Texts/ScreenTitle.js
import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Styles } from '../../../styles/Global';

interface ScreenTitleProps {
    titleText: string,
    style?: StyleProp<ViewStyle>;
}

const ScreenTitle : React.FC<ScreenTitleProps> = ({ titleText, style }) => {
  return (
    <View style={[styles.header, style]}>
      <Text style={Styles.title}>{titleText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 30,
 
  },

});

export default ScreenTitle;