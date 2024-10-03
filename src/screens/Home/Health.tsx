// screens/Auth/ForgotPassword.tsx

import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { Styles } from '../../../styles/Global';




type Props = NativeStackScreenProps<AuthStackParamList, 'Health'>;

const Health: React.FC <Props> = () => {


    return (
        <SafeAreaView style={Styles.safeArea}>
            <View style={styles.container}>
                <Text>Hi, Welcome to Health Diaries</Text>
                
           </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    
    
});

export default Health;