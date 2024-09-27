// screens/Auth/NewPassword.tsx

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import BackButton from '../../components/buttons/BackButton';

const NewPassword: React.FC = () => {

    const handleBackPress = () => {
        console.log('Back button pressed!');
        // Navigation logic here
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                  <BackButton onBackPress={handleBackPress} />
                </View>
                <View style={styles.mainContainer}>
                  <Text>Login Screen</Text>
                </View>
           </View>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    safeArea: {
        flex: 1,

    },
    header: {
        flex: 1,
        backgroundColor: 'pink',
        

    },
    mainContainer: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'azure',
    },
    
});

export default NewPassword;