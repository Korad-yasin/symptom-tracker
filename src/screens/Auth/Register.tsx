// screens/Auth/Register.tsx

import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import BackButton from '../../components/buttons/BackButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import RegisterForm from '../../components/forms/RegisterForm';
import Gbutton from '../../components/buttons/Gbutton';
import { Styles } from '../../../styles/Global';



type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

const Register: React.FC<Props> = ({navigation}) => {

    const handleBackPress = () => {
        console.log('Back button pressed!');
        // Navigation logic here
        navigation.navigate('Login');
    };

   
    return (
        <SafeAreaView style={Styles.safeArea}>
            <View style={Styles.container}>
                <View style={Styles.header}>
                  <BackButton 
                     onBackPress={handleBackPress} 
                  />
                </View>
                <View style={styles.mainContainer}>
                  <RegisterForm navigation={navigation} />
                  <Gbutton 
                   onGbuttonPress={handleBackPress}
                   />
                </View>
           </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 6,
        justifyContent: 'center',
        paddingHorizontal: 10,


    },
    
});

export default Register;