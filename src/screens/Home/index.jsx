import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { CardDev } from '../../components/CardDev';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';

import {listDevelopers} from '../../services/devApi'


export default function Home() {

  const navigate = useNavigation().navigate

  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [devs,setDevs] = useState(listDevelopers)

  const devEx = {
      category: "Front-end",
      description: "Desenvolvedor a x anos",
      id: 5,
      name: "Junior da Silva",
      photo: "https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/01/Sam-CF.jpg",
      stack: "React",
      state: "São Paulo",
  }


useEffect(() => {
  if (!devs){
    return
  }
  console.log(devs)
}, [devs])

  return (
    <>

      <Header onpress='signout'/>
      {!devs ? 
      <View style={styles.container}>
      <ActivityIndicator/>
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
      id={devEx.id} 
      name={devEx.name} 
      stack={devEx.stack} 
      category={devEx.category} 
      state={devEx.state} 
      photo={devEx.photo}
      description={devEx.description}
      />

    

        
      </View>}


    </>
  )
}
