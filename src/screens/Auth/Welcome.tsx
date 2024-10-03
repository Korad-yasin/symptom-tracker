// stand in code new screens

import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import ClickableText from '../../components/Texts/clickableTesxt';
import SubmitButton from '../../components/buttons/SubmitButton';
import { Styles } from '../../../styles/Global';



type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

const Welcome: React.FC<Props> = ({navigation}) => {


    const login = () => {
        navigation.navigate('Login');
    };

    const register = () => {
        navigation.navigate('Register');
    };

    const guest = () => {
        navigation.navigate('Health');
    };

    return (
        <SafeAreaView style={Styles.safeArea}>
            <View style={Styles.container}>
                <View style={styles.sub}>
                 <SubmitButton 
                     onButtonPress={login}
                     buttonText='Login'
                   /> 
                <SubmitButton 
                 style={styles.register}
                 textStyle={styles.registerText} 
                 onButtonPress={register}
                 buttonText='Register'

                /> 
                </View>
                <View style={styles.sub2}>
                 <ClickableText 
                     actionText="Continue as a guest"
                     onActionPress={guest}
                     style={styles.text} 
                    /> 
                </View>
                    
           </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    sub: {
        flex: 0.8,
        justifyContent: 'flex-end',
        marginVertical: 30,

    }, 
    sub2: {
        flex: 0.1,
        justifyContent: 'flex-end',
        backgroundColor: 'white',
    },
    register: {
        margin: 20,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#000',
    },
    registerText: {
        color: '#000',
    },

    text: {
        alignSelf: 'center',
    },

    
});

export default Welcome;