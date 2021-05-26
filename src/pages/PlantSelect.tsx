import React, { useEffect, useState } from 'react';

import {
    Text,
    View,
    StyleSheet,
    FlatList

} from 'react-native';
import { EnviromentButton } from '../components/EnviromentButton';
import { Header } from '../components/Header';

import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentProps {
    key:string;
    title:string;
}

export function PlantSelect() {

    const [enviroments, setEnvirtoments] = useState<EnviromentProps[]>([]);

    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get('plants_environments')
            setEnvirtoments([
                {
                    key: 'all',
                    title: 'todos'
                },
                ...data
            ]);
        }
        fetchEnviroment();
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />

                <Text style={styles.title}>
                    em qual hambiente
                </Text>

                <Text style={styles.subtitle}>
                    você quer colocar sua planta?
                </Text>
            </View>

            <View>
               
                <FlatList
                data={enviroments}
                renderItem={({ item }) => (
                    <EnviromentButton 
                    title={item.title}
                    
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.enviromentlist}
                />
                
            </View>
            

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
    },
    viewFlat: {
        flex: 1
    },
    enviromentlist:{
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    }
})
