// stand in code new screens

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import BackButton from '../../components/buttons/BackButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import LoginForm from '../../components/forms/LoginForm';
import SubmitButton from '../../components/buttons/SubmitButton';
import ClickableText from '../../components/Texts/clickableTesxt';
import ScreenTitle from '../../components/Texts/ScreenTitle';
import Gbutton from '../../components/buttons/Gbutton';


type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const Login: React.FC<Props> = ({navigation}) => {

    const handleBackPress = () => {
        navigation.navigate('Register');
    };

    const login = () => {
        navigation.navigate('Register');
    };

    const ForgotPassword = () => {
        navigation.navigate('ForgotPassword');

    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                  <BackButton onBackPress={handleBackPress} />
                </View>
                <View style={styles.mainContainer}>
                 <ScreenTitle 
                   titleText='Welcome back! Glad to see you, Again!'
                 />
                 <View style={styles.subContainer}>
                     <LoginForm />
                     <ClickableText 
                         actionText="Forgot Password?"
                         onActionPress={ForgotPassword}
                         style={styles.forgotPasswordText} 
                       />
                 </View>
                 
                 
                 <SubmitButton 
                     onButtonPress={login}
                     buttonText='Login'
                   />
                 <Gbutton 
                     onGbuttonPress={login}
                   />
                 <ClickableText 
                     actionText="Register Now"
                     mainText="Don't have an account?"
                     onActionPress={login}
                     style={styles.text}
                   />
                </View>
           </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    }, 
    safeArea: {
        flex: 1,

    },
    header: {
        flex: 1,
    },
    mainContainer: {
        flex: 6,
        paddingHorizontal: 10,
        justifyContent: 'space-evenly',
    },
    subContainer: {
        marginTop: 30,
    },

    forgotPasswordText : {
        alignSelf: 'flex-end',
        color: '#6A707C',
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
    text : {
        alignSelf: 'center',
    },
    
});

export default Login;