import React from 'react';
import {
       TouchableOpacity,
       StyleSheet,
       Text
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Button(){
    return (
        <TouchableOpacity
        style={styles.button}
        activeOpacity={0.3}
    >
        <Text style={styles.buttonText}>
            Confirmar
        </Text>

    </TouchableOpacity>
    )
}
const styles = StyleSheet.create ({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 56,
        
    },
    buttonText: {
        color: colors.white,
        fontSize: 17, 
        fontFamily: fonts.heading  
    }
})