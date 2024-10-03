// components/buttons/SubmitButton.tsx

import React from 'react';
import { View, Text, Pressable, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { Styles } from '../../../styles/Global';

interface SubmitButtonProps {
    onButtonPress: (event: GestureResponderEvent) => void;
    buttonText: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<{ color?: string;}>;

}


const SubmitButton: React.FC<SubmitButtonProps> = ({onButtonPress, buttonText = 'Next', style, textStyle}) => {
    return (
        <View style={Styles.bottomContainer}>
             <Pressable onPress={onButtonPress} style={[Styles.buttonContainer, style]}>
                 <View >
                     <Text style={[Styles.buttonText, textStyle]}>{buttonText}</Text>
                 </View>
             </Pressable>
       </View>
    );

}



export default SubmitButton;