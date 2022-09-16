import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator, FlatList, Modal } from 'react-native';
import styles from './styles';
import { CardDev } from '../../components/CardDev';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';

import DevApi from '../../services/devApi'
import { ModalDetails } from '../../components/ModalDetails';


export default function Home() {

  const navigate = useNavigation().navigate

  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [devs, setDevs] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [selected, setSelected] = useState({
    id:'',
    name: '',
    stack: '',
    category: '',
    state: '',
    photo: '',
    description: '',
  })
  useEffect(() => {
    async function getDevs() {
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <ModalDetails
              id={selected.id}
              name={selected.name}
              stack={selected.stack}
              category={selected.category}
              state={selected.state}
              photo={selected.photo}
              description={selected.description}
              close={() => setModalVisible(false)}
            />
          </Modal>
          <FlatList
            data={devs}
            contentContainerStyle={{ alignItems: 'center', width: '100%' }}
            renderItem={({ item }) =>

              <CardDev
                id={item.id}
                name={item.name}
                stack={item.stack}
                category={item.category}
                state={item.state}
                photo={item.photo}
                description={item.description}
                onpress={() => {
                  setModalVisible(true)
                  setSelected({
                    id:item.id,
                    name: item.name,
                    stack: item.stack,
                    category: item.category,
                    state: item.state,
                    photo: item.photo,
                    description: item.description
                  })

                }}
              />

            }
          />

        </View>}


    </>
  )
}
