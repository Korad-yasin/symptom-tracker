// src/styles/global.ts
import { Platform, StatusBar, StyleSheet } from 'react-native';

import {colors} from './Colors'


export const Styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: colors.background,  
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,  
      
    },
    header: {
        flex: 1,
        backgroundColor: 'pink',
    },
    bottomContainer: {
        alignItems: 'center',

    },

    buttonContainer: {
        backgroundColor: colors.subBtn,
        borderRadius: 8,
        padding: 20,
        width: '90%',
        alignItems: 'center',
        
    },

    buttonText: {
        color: colors.subText,
        fontSize: 15,
        fontWeight: '600',

    },
    formContainer: {
        backgroundColor: colors.formdBtn,
        borderColor: colors.formBdr,
        height: 55,
        width: '90%',
        borderRadius: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,

    },
    formInput: {
        fontSize: 18,
        width: '100%',
        color: colors.formText,
    },
    passContainer: {
        backgroundColor: colors.formdBtn,
        borderColor: colors.formBdr,
        height: 55,
        width: '90%',
        borderRadius: 8,
        paddingHorizontal: 10,
        borderWidth: 1, 
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 15,

    },
    passText: {
        fontSize: 18,
        width: '85%',
        top: '25%',
        color: colors.formText,
    },
    visibilityToggle: {
        left: '90%',
        bottom: '20%',
    },
    textContainer: {
        flexDirection: 'row',
    },

    mainText: {
        color: colors.mainText,
        fontSize: 15,
        fontWeight: '400',
    },
    actionText: {
        color: colors.actText,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5,
    },

    title: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
    
    }


 
});
