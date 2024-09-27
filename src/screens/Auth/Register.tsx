// screens/Auth/Register.tsx

import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import BackButton from '../../components/buttons/BackButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import RegisterForm from '../../components/forms/RegisterForm';
import SubmitButton from '../../components/buttons/SubmitButton';
import Gbutton from '../../components/buttons/Gbutton';



type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

const Register: React.FC<Props> = ({navigation}) => {

    const handleBackPress = () => {
        console.log('Back button pressed!');
        // Navigation logic here
        navigation.navigate('Login');
    };

    const register = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                  <BackButton 
                     onBackPress={handleBackPress} 
                  />
                </View>
                <View style={styles.mainContainer}>
                  <RegisterForm />
                  <SubmitButton 
                     onButtonPress={register}
                     buttonText='Register'
                  />
                  <Gbutton 
                   onGbuttonPress={register}
                   />
                </View>
           </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }, 
    safeArea: {
        flex: 1,

    },
    header: {
        flex: 1,
    },
    mainContainer: {
        flex: 6,
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
        marginTop: 40,
    },
    
});

export default Register;