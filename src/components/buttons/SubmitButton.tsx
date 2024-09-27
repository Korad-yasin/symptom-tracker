// components/buttons/SubmitButton.tsx

import React from 'react';
import { View, Text, StyleSheet, Pressable, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

interface SubmitButtonProps {
    onButtonPress: (event: GestureResponderEvent) => void;
    buttonText: string;
    style?: StyleProp<ViewStyle>;

}


const SubmitButton: React.FC<SubmitButtonProps> = ({onButtonPress, buttonText = 'Next', style}) => {
    return (
        <View style={styles.bottomContainer}>
             <Pressable onPress={onButtonPress} style={[styles.buttonContainer, style]}>
                 <View style={styles.button}>
                     <Text style={styles.buttonText}>{buttonText}</Text>
                 </View>
             </Pressable>
       </View>
    );

}

const styles = StyleSheet.create({
    bottomContainer: {
        alignItems: 'center',


    },
    
    buttonContainer: {
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 20,
        width: '90%',
        alignItems: 'center',
        
        
    },
    button: {

    },
    buttonText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '600',

    },

});

export default SubmitButton;