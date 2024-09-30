// stand in code new screens

import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import ClickableText from '../../components/Texts/clickableTesxt';
import SubmitButton from '../../components/buttons/SubmitButton';



type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

const Welcome: React.FC<Props> = ({navigation}) => {


    const login = () => {
        navigation.navigate('Register');
    };

    const register = () => {
        navigation.navigate('Login');
    };

    const guest = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.sub}>
                <SubmitButton 
                 onButtonPress={login}
                 buttonText='Login'
                /> 
                <SubmitButton 
                 onButtonPress={register}
                 buttonText='Register'
                 style={styles.button}
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
    safeArea: {
        flex: 1,

    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
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
    button: {
        margin: 20,

    },
    text: {
        alignSelf: 'center',

    },

    
});

export default Welcome;