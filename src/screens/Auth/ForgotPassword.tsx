// screens/Auth/ForgotPassword.tsx

import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import BackButton from '../../components/buttons/BackButton';
import SubmitButton from '../../components/buttons/SubmitButton';
import EmailAndName from '../../components/forms/EmailAndName';
import ClickableText from '../../components/Texts/clickableTesxt';
import ScreenTitle from '../../components/Texts/ScreenTitle';
import { Styles } from '../../../styles/Global';

type Props = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>;

const ForgotPassword: React.FC <Props> = ({navigation}) => {

    const [email, setEmail] = useState('');

    const handleBackPress = () => {
        console.log('Back button pressed!');
        navigation.navigate('Login');

    };

    const sendCode = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={Styles.safeArea}>
            <View style={Styles.container}>
                <View style={Styles.header}>
                  <BackButton onBackPress={handleBackPress} />
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.subContainer}>
                      <ScreenTitle 
                         titleText='Forgot Password?'
                       />
                    </View>
                    <View style={styles.sub1Container}>
                      <EmailAndName 
                         value={email}  
                         onChangeText={setEmail} 
                       /> 
                      <SubmitButton 
                         onButtonPress={sendCode}
                         buttonText='send code'
                       />
                    </View>
                    <View style={styles.sub2Container}>
                      <ClickableText 
                         actionText="Login"
                         mainText="Remember password?"
                         onActionPress={sendCode}
                         style={styles.text}
                       />

                    </View>
                </View>
           </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    
    mainContainer: {
        flex: 6,

    },
    subContainer: {
        flex: 0.2,

    },
    sub1Container: {
        flex: 0.3,
        justifyContent: 'space-around',

    },
    sub2Container: {
        flex: 0.5,
        justifyContent: 'flex-end',
        paddingVertical: 30,
        
    },
    text : {
        alignSelf: 'center',
    },
    
});

export default ForgotPassword;