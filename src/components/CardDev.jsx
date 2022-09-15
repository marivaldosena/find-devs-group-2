
import { View, Text,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function CardDev() {

  return (
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
  );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#202024',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      alignItems: 'center',
      paddingVertical:20,
      flex: 1,
      },
      card: {
        width: '90%',
        height: 100,
        textAlign: 'center',
        backgroundColor: '#121214',
        borderRadius: 6,
        marginTop: 30,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        elevation: 5,
        flexDirection: 'row',
        marginBottom: -10,
    },
    profile: {
      width: 80,
      height: 80,
      backgroundColor: '#E1E1E6',
      borderRadius: 50,
      borderWidth: 3,
      borderColor: '#4d4d4d',
      alignItems: 'center',
  },
    cardicon:{
      fontSize: 70,
      color: '#000',
      justifyContent: 'center',
    },
    cardinfo:{

    },
    titleboldfav: {
      fontFamily: 'Poppins_700Bold',
      fontSize: 20,
      color: 'white',
    },
    cardstacks:{
      flexDirection: 'row',
      marginTop: -5,
    },
    iconfav:{
      marginTop: -40,
    },
    javascriptstack:{
      fontSize: 12,
      color: '#DE8F45',
    },
    reactstack:{
      fontSize: 12,
      color: '#5BFE66',
    },
    reactnativestack:{
      fontSize: 12,
      color: '#2D9135',
    },
    nodestack:{
      fontSize: 12,
      color: '#4E31FC',
    },
    csharpstack:{
      fontSize: 12,
      color: '#7953E0',
    },
    phytonstack:{
      fontSize: 12,
      color: '#916134',
    },
    })