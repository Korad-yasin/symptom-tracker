// src/components/forms/EmailAndName.tsx
import React from 'react';
import { TextInput, View, StyleSheet, TextInputProps } from 'react-native';


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
        <View style={[styles.container, style]}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={nameValue}
            onChangeText={onChangeName}
            autoCapitalize="none"
          />
        </View>
      )}
      <View style={[styles.container, style]}>
        <TextInput
          style={styles.input}
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

// Define styles for the component (can be customized or moved to a separate file)
const styles = StyleSheet.create({
    container: {
        height: 55,
        width: '90%',
        borderRadius: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#DADADA',
        backgroundColor: '#F7F8F9',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        
    },
    input: {
        fontSize: 18,
        width: '100%',
    },
});

export default EmailAndName;
