
// src/navigation/types.ts
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // Import type for stack navigation props

// Define a type for the entire authentication navigation stack
export type AuthStackParamList = {
  Login: undefined; // The Login screen does not expect any parameters
  Register: undefined; // The Register screen expects an optional 'referrer' parameter
  ForgotPassword: undefined; // The ForgotPassword screen does not expect any parameters
  OTP: { email: string }; // The OTP screen expects an 'email' parameter of type string
  NewPassword: { token: string }; // The NewPassword screen expects a 'token' parameter of type string
};

// Define a type for props that each screen component will receive
export type AuthScreenProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, T>;
