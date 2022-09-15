import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, FlatList } from 'react-native';
import styles from './styles'
import { Auth } from 'aws-amplify'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../components/Header';
import { useSelector, useDispatch } from 'react-redux'
import { favStateData, addNewFavorite, removeFavorite } from '../../store/modules/favorites/reducer'
import { CardDev } from '../../components/CardDev';

export default function Favs() {

    const [username, setUser] = useState('')
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const favorite = useSelector(favStateData);

    const onResendPress = async () => {
        if (loading) {
            return
        }
    }

    return (
        <>
            <Header onpress='home' />
            <View style={styles.container}>
                <View style={styles.hello}>
                    <Text style={styles.title}>Favoritos</Text>
                </View>
                {favorite == '' &&
                
                <Text style={styles.texts}>Não há favoritos salvos.</Text>
                
                }
                {favorite.map((item,index)=>(
                    <CardDev
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    stack={item.stack}
                    category={item.category}
                    state={item.state}
                    photo={item.photo}
                    description={item.description}
                  />
                ))}

                

            </View>
        </>
    )
}
