// src/components/forms/LoginForm.tsx
import React, { useState } from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import EmailAndName from './EmailAndName'; 
import PasswordInput from './PasswordInput';

const RegisterForm: React.FC = () => { 

  const [name, setName] = useState('');  
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');



  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        paddingVertical: 5,
        marginBottom: 60,
  
    },
    
});

export default RegisterForm; 