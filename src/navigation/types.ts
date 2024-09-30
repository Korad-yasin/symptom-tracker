
// src/navigation/types.ts
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // Import type for stack navigation props

// Define a type for the entire authentication navigation stack
export type AuthStackParamList = {
  Login: undefined; 
  Register: undefined; 
  ForgotPassword: undefined; 
  Welcome: undefined;

};

// Define a type for props that each screen component will receive
export type AuthScreenProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, T>;
