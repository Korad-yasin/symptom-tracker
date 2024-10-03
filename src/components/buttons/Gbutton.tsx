// components/buttons/Gbutton.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,GestureResponderEvent  } from 'react-native';
import { SvgXml } from 'react-native-svg';  

// Define prop types using an interface
interface GbuttonProps {
    onGbuttonPress: (event: GestureResponderEvent) => void; // Define the type for the onBackPress prop
}

const GbuttonSvg = `
<svg width="105" height="56" viewBox="0 0 105 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="104" height="55" rx="7.5" stroke="#DADADA"/>
<path d="M46.42 30.4656L45.5972 33.537L42.5901 33.6006C41.6914 31.9338 41.1816 30.0266 41.1816 28C41.1816 26.0403 41.6582 24.1922 42.5031 22.5649H42.5037L45.1809 23.0558L46.3537 25.7169C46.1082 26.4325 45.9744 27.2007 45.9744 28C45.9745 28.8675 46.1317 29.6987 46.42 30.4656Z" fill="#FBBB00"/>
<path d="M64.6116 25.7922C64.7474 26.5071 64.8181 27.2454 64.8181 28C64.8181 28.8461 64.7292 29.6714 64.5597 30.4675C63.9844 33.1766 62.4811 35.5422 60.3987 37.2162L60.398 37.2156L57.026 37.0435L56.5487 34.0643C57.9305 33.2539 59.0104 31.9857 59.5793 30.4675H53.2598V25.7922H59.6715H64.6116Z" fill="#518EF8"/>
<path d="M60.3981 37.2156L60.3988 37.2163C58.3735 38.8442 55.8007 39.8182 53.0001 39.8182C48.4994 39.8182 44.5865 37.3026 42.5903 33.6007L46.4202 30.4656C47.4182 33.1293 49.9877 35.0254 53.0001 35.0254C54.2949 35.0254 55.5079 34.6754 56.5488 34.0643L60.3981 37.2156Z" fill="#28B446"/>
<path d="M60.5432 18.9026L56.7146 22.037C55.6374 21.3636 54.364 20.9747 52.9997 20.9747C49.9192 20.9747 47.3016 22.9578 46.3536 25.7169L42.5036 22.5649H42.5029C44.4698 18.7727 48.4321 16.1818 52.9997 16.1818C55.8672 16.1818 58.4964 17.2033 60.5432 18.9026Z" fill="#F14336"/>
</svg>
`;

const Gbutton: React.FC<GbuttonProps> = ({onGbuttonPress}) => {
    return (
        <View style={styles.container} >
             <View style={styles.lineContainer} >
                 <View style={styles.line} ></View>
                 <Text style={styles.text}>Or Login with</Text>
                 <View style={styles.line} ></View>
             </View>
             <TouchableOpacity onPress={onGbuttonPress} style={styles.button}>
                 <SvgXml xml={GbuttonSvg} width="105" height="56" />
              </TouchableOpacity>
        </View>
        
    );
  }
  
  
  const styles = StyleSheet.create({
    container : {
        paddingHorizontal: 10,

        
    },
    lineContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        
    },
    line : {
        height: 1,
        width: 120,
        backgroundColor: '#E8ECF4',
        marginHorizontal: 10,
        

    },
    text: {
        fontSize: 14,
        color: '#6A707C',
    },
    button: {
      padding: 0,
      alignSelf: 'center',
      marginTop: 10,
    },
});

export default Gbutton;