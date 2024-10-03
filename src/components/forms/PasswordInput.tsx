// components/forms/PasswordInput.js
import React, {useState} from 'react';
import { TextInput, View, TouchableOpacity, TextInputProps  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Styles } from '../../../styles/Global';


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
        <View style={[Styles.passContainer, style]}>
          <TextInput
              style={Styles.passText}
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              value={String(value)}
              onChangeText={(text) => onChangeText(text)}
             autoCapitalize="none"
           />
          <TouchableOpacity
             style={Styles.visibilityToggle}
             onPress={() => setIsPasswordVisible(!isPasswordVisible)}
           >
             <Icon name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="grey"  />
           </TouchableOpacity>
       </View>
       {showRetype && (
        <View style={[Styles.passContainer, style]}>
          <TextInput
             style={Styles.passText}
             placeholder="Retype Password"
             secureTextEntry={!isRetypePasswordVisible}
             value={String(retypeValue)}
             onChangeText={(text) => onRetypeChange && onRetypeChange(text)}
             autoCapitalize="none"
           />
          <TouchableOpacity
             style={Styles.visibilityToggle}
             onPress={() => setisRetypePasswordVisible(!isRetypePasswordVisible)}
            >
            <Icon name={isRetypePasswordVisible ? "eye-off" : "eye"} size={24} color="grey" />
          </TouchableOpacity>
       </View>
         )}
    </View>
    
  );
};



export default PasswordInput;