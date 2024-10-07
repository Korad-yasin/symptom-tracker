// stand in code new screens

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import BackButton from '../../components/buttons/BackButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import LoginForm from '../../components/forms/LoginForm';
import ClickableText from '../../components/Texts/clickableTesxt';
import ScreenTitle from '../../components/Texts/ScreenTitle';

import { Styles } from '../../../styles/Global';


type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const Login: React.FC<Props> = ({navigation}) => {

    const handleBackPress = () => {
        navigation.navigate('Register');
    };

    return (
        <SafeAreaView style={Styles.safeArea}>
            <View style={Styles.container}>
                <View style={Styles.header}>
                  <BackButton onBackPress={handleBackPress} />
                </View>
                <View style={styles.mainContainer}>
                 <ScreenTitle 
                   titleText='Welcome back! Glad to see you, Again!'
                 />
                 <View style={styles.subContainer}>
                     <LoginForm 
                         navigation={navigation}
                     />
                 </View>
                 <ClickableText 
                     actionText="Register Now"
                     mainText="Don't have an account?"
                     onActionPress={handleBackPress}
                     style={styles.text}
                   />
                </View>
           </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({

    mainContainer: {
        flex: 6,
        paddingHorizontal: 10,
        justifyContent: 'space-evenly',
    },
    subContainer: {
        flex: 0.8,
        justifyContent: 'center',

    },
    text : {
        alignSelf: 'center',
    },
    
});

export default Login;