// src/components/forms/LoginForm.tsx
import React, { useState } from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import EmailAndName from './EmailAndName'; 
import PasswordInput from './PasswordInput';


const LoginForm: React.FC = () => { 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 


  return (
    <View style={styles.container}>
      <EmailAndName 
         value={email}  
         onChangeText={setEmail} 
       /> 
       <PasswordInput 
         value={password}
         onChangeText={setPassword}  
       />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        paddingVertical: 5,
    },
    
});

export default LoginForm; 
