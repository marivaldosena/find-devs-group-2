import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { AntDesign, Entypo, FontAwesome5 ,Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Logo } from '../../components/Logo';
import styles from './styles';

export default function SignIn() {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigation().navigate

    const onSignInPress = async () => {
        if (loading) {
            return
        }

        setLoading(true)

        try {
            const response = await Auth.signIn(user, password)

        } catch (error) {
            Alert.alert('Oops', error.message)
        }
        setLoading(false)
    }

    const onGooglePress = async () => {
        if (loading) {
            return
        }

        setLoading(true)

        try {
            const response = await Auth.federatedSignIn()

        } catch (error) {
            Alert.alert('Oops', error.message)
        }
        setLoading(false)
    }



    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.title}>Acesse sua conta</Text>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <View style={styles.icon}>
                        <FontAwesome5
                            name="user" size={24} color="#EEE" />
                    </View>
                    <TextInput
                        style={styles.inputs}
                        placeholderTextColor='#EEE'
                        placeholder='Login'
                        onChangeText={value => setUser(value)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.icon}>
                    <Ionicons name="ios-key-sharp" size={24} color="#EEE"/>
                    </View>
                    <TextInput
                        style={styles.inputs}
                        placeholderTextColor='#EEE'
                        placeholder='Senha'
                        onChangeText={value => setPassword(value)}
                        secureTextEntry={true}
                    />
                </View>
            </View>

            <TouchableOpacity
                onPress={() => onSignInPress()}
                disabled={loading ? true : false}
                style={styles.buttons}
            >
                <Text style={styles.texts}>
                    {loading ? 'Carregando...' : 'Entrar'}
                </Text>
            </TouchableOpacity>

            <Text style={styles.texts}>Acesse também com:</Text>
            <View style={styles.socialContainer}>

                <TouchableOpacity
                    onPress={() => onGooglePress()}
                    disabled={loading ? true : false}
                    style={styles.socialButtons}
                >
                    <Text><AntDesign name="google" size={18}  color="#4D4D4D"  /></Text>
                    <Text style={styles.socialTexts}>
                        Google
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={styles.linkContainer}>
                <Text style={styles.texts}>Ainda não tem conta? </Text>

                <TouchableOpacity >
                    <Text
                        onPress={() => navigate('SignUp')}
                        style={styles.links}>Cadastre-se
                    </Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity>
                <Text
                    onPress={() => navigate('ForgotPassword')}
                    style={styles.textLink}>Esqueci minha senha
                </Text>
            </TouchableOpacity>

        </View>
    )
}
