// src/navigation/AuthNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Register from '../screens/Auth/Register';
import OTP from '../screens/Auth/OTP';
import NewPassword from '../screens/Auth/NewPassword';
import { AuthStackParamList } from './types';



const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Register">
      <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <AuthStack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="OTP" component={OTP} />
      <AuthStack.Screen name="NewPassword" component={NewPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
