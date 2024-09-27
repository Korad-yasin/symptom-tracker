// In components/Texts/ScreenTitle.js
import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface ScreenTitleProps {
    titleText: string,
    style?: StyleProp<ViewStyle>;
}

const ScreenTitle : React.FC<ScreenTitleProps> = ({ titleText, style }) => {
  return (
    <View style={[styles.header, style]}>
      <Text style={styles.welcome}>{titleText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 30,
 
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',

  }
});

export default ScreenTitle;