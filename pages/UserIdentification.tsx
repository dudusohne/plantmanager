import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/core';

export function UserIdentification() {
   
   const [isFocused, setIsFocused] = useState(false);
   const [isFilled, setIsFilled] = useState(false);
   const [name, setName] = useState<string>();

   function handleInputBlur(){
       setIsFocused(false);
       setIsFilled(!!name);
   }
   function handleInputFocus(){
    setIsFocused(true);
   }
   function handleInputChange(value: string){
       setIsFilled(!!value);
       setName(value);
   }
   const navigation = useNavigation()

    function handleSubmit(){
        navigation.navigate('Confirmation')
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
            <View style={styles.content}>
                <View style={styles.form}>
                    <View style={styles.header}>
                    <Text style={styles.emoji}>
                        { isFilled ? '😂' : '😊'}
                    </Text>
                    <Text
                        style={styles.text}
                    >
                        Como podemos {'\n'}
                        chamar você?
                    </Text>
                    <TextInput
                        style={[
                            styles.input,
                            (isFocused || isFilled ) && 
                            { borderColor: colors.green }
                        ]}
                        placeholder={'Digite seu nome..'}
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        onChangeText={handleInputChange}
                        
                    />  
                    </View>
                    <View style={styles.footer}>
                    <Button 
                     title="Confirmar"
                     onPress={handleSubmit}
                     />
                    </View>
                </View>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 22,
        fontFamily: fonts.heading,
        lineHeight: 32
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    },
});