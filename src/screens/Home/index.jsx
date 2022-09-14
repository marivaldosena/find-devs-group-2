import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Header } from '../../components/Header';
import { useSelector , useDispatch } from 'react-redux'
import { favStateData,addNewFavorite, removeFavorite } from '../../store/modules/favorites/reducer'



export default function Home() {

    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const favorite = useSelector(favStateData);

    const dispatch = useDispatch();

    const addFavorite = (item) => {
        dispatch(addNewFavorite(item));
    }

    const removefavorite = (item) => {
        dispatch(removeFavorite(item));
    }

    const card = {
        id: 1,
        name: 'Fernanda Peters',
        stacks: ['JavaScript','React','React Native']
    }
    
    const isFavorite = favorite.some(item => item.id === card.id)

    useEffect(() => {
        console.log(favorite)
    }, [favorite])
    

    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.hello}>
                    <Text style={styles.title}>Olá,</Text>
                    <Text style={styles.titlebold}>Dev</Text>
                    <Text style={styles.title}>!</Text>
                </View>


                <View style={styles.form}>


                    <View style={styles.inputContainer}>

                        <TextInput
                            autoCompleteType='off'
                            style={styles.inputs}
                            placeholderTextColor='#EEE'
                            placeholder='Digite para pesquisar... '
                            onChangeText={value => setSearch(value)}
                        />
                        <View style={styles.icon}>
                            <Ionicons name="ios-search" size={16} color="#EEE" />
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    //onPress={() => onResetPress()}
                    disabled={loading ? true : false}
                    style={styles.buttons}
                >
                    <Text style={styles.texts}>
                        {loading ? 'Carregando...' : 'Favoritos'}
                    </Text>
                </TouchableOpacity>

                <View style={styles.card}>
                    <View style={styles.profile}>
                        <View style={styles.cardicon}>
                            <Ionicons style={styles.cardicon} name="person-circle-outline" size={40} color="#EEE" />
                        </View>
                    </View>

                    <View style={styles.cardinfo}>

                        <Text style={styles.titleboldfav}>Fernanda Peters</Text>
                        <View style={styles.cardstacks}>
                            <Text style={styles.javascriptstack}>JavaScript, </Text>
                            <Text style={styles.reactstack}>React, </Text>
                            <Text style={styles.reactnativestack}>React Native</Text>
                        </View>

                    </View>

                    <TouchableOpacity 
                    >
                        <Ionicons style={styles.iconfav} 
                        onPress={() => {
                            
                            
                            if(!favorite.some(item => item.id === card.id)){
                            addFavorite(card)
                            
                        }
                        else{
                            removefavorite(card)
                           
                        }
                        }}
                     
                        name={isFavorite ? "star" : "star-outline"}
                        size={20} color="#DE8F45" />
                    </TouchableOpacity>

                </View>

                <View style={styles.card}>
                    <View style={styles.profile}>
                        <View style={styles.cardicon}>
                            <Ionicons style={styles.cardicon} name="person-circle-outline" size={40} color="#EEE" />
                        </View>
                    </View>

                    <View style={styles.cardinfo}>

                        <Text style={styles.titleboldfav}>Luciano Bueno</Text>
                        <View style={styles.cardstacks}>
                            <Text style={styles.javascriptstack}>JavaScript, </Text>
                            <Text style={styles.nodestack}>Node </Text>
                        </View>

                    </View>

                    <View>
                        <Ionicons style={styles.iconfav} name="star-outline" size={20} color="#DE8F45" />
                    </View>

                </View>

                <View style={styles.card}>
                    <View style={styles.profile}>
                        <View style={styles.cardicon}>
                            <Ionicons style={styles.cardicon} name="person-circle-outline" size={40} color="#EEE" />
                        </View>
                    </View>

                    <View style={styles.cardinfo}>

                        <Text style={styles.titleboldfav}>Marivaldo Sena</Text>
                        <View style={styles.cardstacks}>
                            <Text style={styles.reactnativestack}>React Native, </Text>
                            <Text style={styles.csharpstack}>C#</Text>
                        </View>

                    </View>

                    <View>
                        <Ionicons style={styles.iconfav} name="star-outline" size={20} color="#DE8F45" />
                    </View>

                </View>

                <View style={styles.card}>
                    <View style={styles.profile}>
                        <View style={styles.cardicon}>
                            <Ionicons style={styles.cardicon} name="person-circle-outline" size={40} color="#EEE" />
                        </View>
                    </View>

                    <View style={styles.cardinfo}>

                        <Text style={styles.titleboldfav}>Jeffyson Rodrigues</Text>
                        <View style={styles.cardstacks}>
                            <Text style={styles.csharpstack}>C#, </Text>
                            <Text style={styles.phytonstack}>Phyton</Text>
                        </View>

                    </View>

                    <View>
                        <Ionicons style={styles.iconfav} name="star" size={20} color="#DE8F45" />
                    </View>

                </View>

                <View style={styles.card}>
                    <View style={styles.profile}>
                        <View style={styles.cardicon}>
                            <Ionicons style={styles.cardicon} name="person-circle-outline" size={40} color="#EEE" />
                        </View>
                    </View>

                    <View style={styles.cardinfo}>

                        <Text style={styles.titleboldfav}>André Carvalho</Text>
                        <View style={styles.cardstacks}>
                            <Text style={styles.javascriptstack}>JavaScript </Text>

                        </View>

                    </View>

                    <View>
                        <Ionicons style={styles.iconfav} name="star-outline" size={20} color="#DE8F45" />
                    </View>

                </View>

            </View>
        </>
    )
}