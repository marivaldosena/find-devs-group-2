import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { CardDev } from '../../components/CardDev';
import { useSelector, useDispatch } from 'react-redux'
import { favStateData, addNewFavorite, removeFavorite } from '../../store/modules/favorites/reducer'
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';


export default function Home() {

  const navigate = useNavigation().navigate

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
    stacks: ['JavaScript', 'React', 'React Native']
  }

  const isFavorite = favorite.some(item => item.id === card.id)



  return (
    <>

      <Header onpress='signout'/>

      <View style={styles.container}>
        <View style={styles.hello}>
          <Text style={styles.title}>Olá,</Text>
          <Text style={styles.titleBold}>Dev</Text>
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
          onPress={() => navigate('Favs')}
          disabled={loading ? true : false}
          style={styles.buttons}
        >
          <Text style={styles.texts}>
            {loading ? 'Carregando...' : 'Favoritos'}
          </Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.profile}>
            <View style={styles.cardIcon}>
              <Ionicons style={styles.cardIcon} name="person-circle-outline" size={40} color="#EEE" />
            </View>
          </View>

          <View style={styles.cardInfo}>

            <Text style={styles.titleBoldFav}>Fernanda Peters</Text>

            <View style={styles.infoDev}>
              <Text style={styles.texts}>FullStack</Text>
              <Text style={styles.texts}> | </Text>
              <Text style={styles.texts}>Santa Catarina</Text>
            </View>
            
            <View style={styles.cardStacks}>
              <Text style={styles.javascriptStack}>JavaScript, </Text>
              <Text style={styles.reactStack}>React, </Text>
              <Text style={styles.reactnativeStack}>React Native</Text>
            </View>


          </View>
      
          <TouchableOpacity>
            <Ionicons style={styles.iconFav}
              onPress={() => {
                if (!favorite.some(item => item.id === card.id)) {
                  addFavorite(card)
                }
                else {
                  removefavorite(card)
                }
              }}
              name={isFavorite ? "star" : "star-outline"}
              size={20} color="#DE8F45" />
          </TouchableOpacity>
        </View>
      </View>


    </>
  )
}
