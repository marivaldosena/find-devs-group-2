import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles'
import { Auth } from 'aws-amplify'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Logo } from '../../components/Logo';
import { AntDesign, Entypo, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../components/Header';


export default function SignUp() {

    const [name, setName] = useState('')
    const [username, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigation().navigate

    const onSignUpPress = async () => {
        if (loading) {
            return
        }

        setLoading(true)

        try {
            const response = await Auth.signUp({
                username,
                password,
                attributes: { email, name, preferred_username: username }
            })
            Alert.alert('Código de verificação', 'Veririque o código de confirmação no seu email cadastrado!')
            navigate('ConfirmEmail')

        } catch (error) {
            Alert.alert('Oops', error.message)
        }
        setLoading(false)
    }

    return (
        <>
        <Header/>
        <View style={styles.container}>
            
            <Text style={styles.title}>Faça seu cadastro!</Text>
            <View style={styles.form}>

                <View style={styles.inputContainer}>
                    <View style={styles.icon}>
                        <Ionicons name="happy-outline" size={24} color="#EEE" />
                    </View>
                    <TextInput
                        autoCompleteType='off'
                        style={styles.inputs}
                        placeholderTextColor='#EEE'
                        placeholder='Nome'
                        onChangeText={value => setName(value)}
                    />
                </View>

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
                        <MaterialIcons name="email" size={24} color="#EEE" />
                    </View>
                    <TextInput
                        autoCompleteType='off'
                        style={styles.inputs}
                        placeholderTextColor='#EEE'
                        placeholder='E-mail'
                        onChangeText={value => setEmail(value)}
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
                        placeholder='Senha'
                        onChangeText={value => setPassword(value)}
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <TouchableOpacity
                onPress={() => onSignUpPress()}
                disabled={loading ? true : false}
                style={styles.buttons}
            >
                <Text style={styles.texts}>
                    {loading ? 'Carregando...' : 'Cadastrar'}
                </Text>
            </TouchableOpacity>
            
        </View>
        </>
    )
}
