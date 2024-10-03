// src/components/forms/EmailAndName.tsx
import React from 'react';
import { TextInput, View, TextInputProps } from 'react-native';
import { Styles } from '../../../styles/Global';


interface EmailAndNameProps {
  value: string; 
  onChangeText: (text: string) => void; 
  nameValue?: string; 
  onChangeName?: (text: string) => void; 
  showName?: boolean; 
  style?: TextInputProps['style']; 
}


const EmailAndName: React.FC<EmailAndNameProps> = ({value, onChangeText, nameValue, onChangeName, showName = false, style,}) => {


  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      {showName && (
        <View style={[Styles.formContainer, style]}>
          <TextInput
            style={Styles.formInput}
            placeholder="Name"
            value={nameValue}
            onChangeText={onChangeName}
            autoCapitalize="none"
          />
        </View>
      )}
      <View style={[Styles.formContainer, style]}>
        <TextInput
          style={Styles.formInput}
          placeholder="Your Email"
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
        />
      </View>
    </View>
  );
};


export default EmailAndName;
