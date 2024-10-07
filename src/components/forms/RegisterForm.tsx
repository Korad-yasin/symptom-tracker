// src/components/forms/Register.tsx
import React, { useState, useEffect } from 'react'; 
import { View, StyleSheet, Text } from 'react-native'; 
import EmailAndName from './EmailAndName'; 
import PasswordInput from './PasswordInput';
import SubmitButton from '../buttons/SubmitButton';
import Gbutton from '../../components/buttons/Gbutton';
import { createUserWithEmailAndPassword, signInWithCredential, GoogleAuthProvider  } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
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

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "601274078815-grlj98s8njiouhhl7cgvpk0aruscs2r5.apps.googleusercontent.com", // Replace with Firebase Web Client ID
  });

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

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      // Create a Google credential with the token
      const credential = GoogleAuthProvider.credential(id_token);

      // Sign in with the credential from the Google user
      signInWithCredential(auth, credential)
        .then(() => {
          console.log('Registered with Google!');
          navigation.navigate('Login'); 
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  }, [response]);




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
      <View>
      <SubmitButton 
         onButtonPress={handleRegister}
         buttonText='Register'
       />
       <Gbutton 
          onGbuttonPress={() => promptAsync()}
          disabled={!request}
        />
      </View>
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