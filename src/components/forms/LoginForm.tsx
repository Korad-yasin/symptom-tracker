// src/components/forms/LoginForm.tsx
import React, { useState } from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import EmailAndName from './EmailAndName'; 
import PasswordInput from './PasswordInput';
import ClickableText from '../../components/Texts/clickableTesxt';
import SubmitButton from '../buttons/SubmitButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

interface LoginFormProps {
  navigation: any; // Accept navigation prop from parent

}

const LoginForm: React.FC<LoginFormProps> = ({navigation}) => { 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully!");
      navigation.navigate('Health');
      // Add your post-login navigation or logic here
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  const ForgotPassword = () => {
    navigation.navigate('ForgotPassword');

  }


  return (
    <View style={styles.container}>
      <View>
      <EmailAndName 
         value={email}  
         onChangeText={setEmail} 
       /> 
       <PasswordInput 
         value={password}
         onChangeText={setPassword}  
       />
       <ClickableText 
          actionText="Forgot Password?"
          onActionPress={ForgotPassword}
          style={styles.forgotPasswordText} 
        />
      </View>
       {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
       <SubmitButton 
          onButtonPress={handleLogin}
          buttonText='Login'
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 0.9,
      justifyContent: 'space-between',
      paddingVertical: 10,
      backgroundColor: 'yellow',
    },
    forgotPasswordText : {
      alignSelf: 'flex-end',
      color: '#6A707C',
      paddingHorizontal: 10,
      paddingVertical: 5,

    }, 
});

export default LoginForm; 
