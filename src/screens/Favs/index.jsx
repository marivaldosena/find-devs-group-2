import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, FlatList } from 'react-native';
import styles from './styles'
import { Auth } from 'aws-amplify'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../components/Header';


export default function Favs() {

  const [username, setUser] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)


  const onResendPress = async () => {
      if (loading) {
          return
      }    
  }

  return (
      <>
          <Header onpress='home'/>
          <View style={styles.container}>
              <View style={styles.hello}>
                  <Text style={styles.title}>Favoritos</Text>
              </View>


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

                  <View>
                      <Ionicons style={styles.iconfav} name="star" size={20} color="#DE8F45" />
                  </View>

              </View>
                           
          </View>
      </>
  )
}
