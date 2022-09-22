import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles'
import { Auth } from 'aws-amplify'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Logo } from '../../components/Logo';
import { AntDesign, Entypo, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../components/Header';

export default function Forgot() {

    const [username, setUser] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigation().navigate

    const onResetPress = async () => {
        if (loading) {
            return
        }

        setLoading(true)

        try {
            const response = await Auth.forgotPassword(username)
            Alert.alert('Atenção', 'Um código de verificação foi enviado para o e-mail cadastrado!')
            navigate('NewPassword')
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
            
            <Text style={styles.title}>Esqueci a senha</Text>
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
            </View>
            <TouchableOpacity
                onPress={() => onResetPress()}
                disabled={loading ? true : false}
                style={styles.buttons}
            >
                <Text style={styles.texts}>
                    {loading ? 'Carregando...' : 'Resetar'}
                </Text>
            </TouchableOpacity>

            
        </View>
        </>
    )
}
