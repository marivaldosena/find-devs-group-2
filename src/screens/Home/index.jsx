import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { CardDev } from '../../components/CardDev';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';

import DevApi from '../../services/devApi'


export default function Home() {

  const navigate = useNavigation().navigate

  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [devs, setDevs] = useState()


  useEffect(() => {
    async function getDevs(){
      try {
      const dev2 = await DevApi.listDevelopers()
      setDevs(dev2)
      } catch (error) {
        
      }
    }
    getDevs()
  }, [])

  return (
    <>

      <Header onpress='signout' />
      {!devs ?
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
        :
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
          <CardDev
            id={devs[0].id}
            name={devs[0].name}
            stack={devs[0].stack}
            category={devs[0].category}
            state={devs[0].state}
            photo={devs[0].photo}
            description={devs[0].description}
          />
          <CardDev
            id={devs[1].id}
            name={devs[1].name}
            stack={devs[1].stack}
            category={devs[1].category}
            state={devs[1].state}
            photo={devs[1].photo}
            description={devs[1].description}
          />




        </View>}


    </>
  )
}
