// components/forms/PasswordInput.js
import React, {useState} from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, TextInputProps  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


// Define types for the component props
interface PasswordInputProps {
    value: string | number; 
    onChangeText: (text: string) => void; 
    retypeValue?: string | number; 
    onRetypeChange?: (text: string) => void; 
    showRetype?: boolean; 
    style?: TextInputProps['style'];
  }

const PasswordInput:  React.FC<PasswordInputProps>= ({ value, onChangeText, style, showRetype = false, retypeValue, onRetypeChange  }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRetypePasswordVisible, setisRetypePasswordVisible] = useState(false);



  return (
    <View style={{ width: '100%' , alignItems: 'center',}}>
        <View style={[styles.container, style]}>
          <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              value={String(value)}
              onChangeText={(text) => onChangeText(text)}
             autoCapitalize="none"
           />
          <TouchableOpacity
             style={styles.visibilityToggle}
             onPress={() => setIsPasswordVisible(!isPasswordVisible)}
           >
             <Icon name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="grey" />
           </TouchableOpacity>
       </View>
       {showRetype && (
        <View style={[styles.container, style]}>
          <TextInput
             style={styles.input}
             placeholder="Retype Password"
             secureTextEntry={!isRetypePasswordVisible}
             value={String(retypeValue)}
             onChangeText={(text) => onRetypeChange && onRetypeChange(text)}
             autoCapitalize="none"
           />
          <TouchableOpacity
             style={styles.visibilityToggle}
             onPress={() => setisRetypePasswordVisible(!isRetypePasswordVisible)}
            >
            <Icon name={isRetypePasswordVisible ? "eye-off" : "eye"} size={24} color="grey" />
          </TouchableOpacity>
       </View>
         )}
    </View>
    
  );
};

// stylesheet

const styles = StyleSheet.create({
  container: {
      height: 55,
      width: '90%',
      borderRadius: 8,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#DADADA',
      backgroundColor: '#F7F8F9',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginTop: 15,

  },
  input: {
      fontSize: 18,
      width: '85%',
      top: '25%',

  },
  icon: {
      padding: 8,

  },
  visibilityToggle: {
      left: '90%',
      bottom: '20%',
  },
});

export default PasswordInput;