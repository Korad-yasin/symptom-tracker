// src/components/forms/Register.tsx
import React, { useState } from 'react'; 
import { View, StyleSheet, Text } from 'react-native'; 
import EmailAndName from './EmailAndName'; 
import PasswordInput from './PasswordInput';
import SubmitButton from '../buttons/SubmitButton';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

interface RegisterFormProps {
  navigation: any; // Accept navigation prop from parent

}

const RegisterForm: React.FC<RegisterFormProps> = ({navigation}) => { 

  const [name, setName] = useState('');  
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    if (password !== retypePassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registered successfully!");
      navigation.navigate('Login'); 
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };



  return (
    <View style={styles.container}>
      <View>
      <EmailAndName 
         value={email}  
         onChangeText={setEmail} 
         showName={true}
         nameValue={name}
         onChangeName={setName}
       /> 
       <PasswordInput 
         value={password}
         onChangeText={setPassword}
         showRetype={true}
         retypeValue={retypePassword}
         onRetypeChange={setRetypePassword}    
       />
       {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
      </View>
       <SubmitButton 
         onButtonPress={handleRegister}
         buttonText='Register'
       />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 0.7,
      justifyContent: 'space-between',
      paddingVertical: 5,
      backgroundColor: 'yellow',
        
  
    },
    
});

export default RegisterForm; 