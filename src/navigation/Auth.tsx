// src/navigation/AuthNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Register from '../screens/Auth/Register';
import Welcome from '../screens/Auth/Welcome';
import { AuthStackParamList } from './types';



const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <AuthStack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      <AuthStack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }}/>
      
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
