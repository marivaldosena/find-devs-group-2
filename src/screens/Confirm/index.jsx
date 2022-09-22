import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles'
import { Auth } from 'aws-amplify'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Logo } from '../../components/Logo';
import { AntDesign, Entypo, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../components/Header';

export default function Confirm() {

    const [username, setUser] = useState('')
    const [code, setCode] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigation().navigate



    const onConfirmPress = async () => {
        if (loading) {
            return
        }

        setLoading(true)

        try {
            const response = await Auth.confirmSignUp(username, code)
            Alert.alert('Sucesso', "E-mail confirmado com sucesso!")
            navigate('SignIn')
        } catch (error) {
            Alert.alert('Oops', error.message)
        }
        setLoading(false)
    }

    const onResendPress = async () => {
        if (loading) {
            return
        }

        setLoading(true)

        try {
            const response = await Auth.resendSignUp(username)
            Alert.alert('Sucesso', "Código enviado para o email cadastrado!")
        } catch (error) {
            Alert.alert('Oops', error.message)
        }
        setLoading(false)
    }

    return (
        <>
        <Header onpress='signin'/>
        <View style={styles.container}>
            
            <Text style={styles.title}>Confirme seu E-mail</Text>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <View style={styles.icon}>
                        <FontAwesome5
                            name="user" size={24} color="#EEE" />
                    </View>
                    <TextInput
                        autoCompleteType='off'
                        style={styles.inputs}
                        placeholderTextColor='#EEE'
                        placeholder='Usuário'
                        onChangeText={value => setUser(value)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.icon}>
                    <Ionicons name="ios-key-sharp" size={24} color="#EEE" />
                    </View>
                    <TextInput
                        autoCompleteType='off'
                        style={styles.inputs}
                        placeholderTextColor='#EEE'
                        placeholder='Código'
                        onChangeText={value => setCode(value)}
                    />
                </View>

            </View>
            <TouchableOpacity
                onPress={() => onConfirmPress()}
                disabled={loading ? true : false}
                style={styles.buttons}
            >
                <Text style={styles.texts}>
                    {loading ? 'Carregando...' : 'Confirmar'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onResendPress()}
                disabled={loading ? true : false}
                style={styles.buttonsgray}
            >
                <Text style={styles.texts}>
                    {loading ? 'Carregando...' : 'Reenviar Código'}
                </Text>
            </TouchableOpacity>
            
        </View>
        </>
    )
}
