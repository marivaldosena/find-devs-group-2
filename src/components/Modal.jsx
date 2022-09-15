
import { View, Text,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function Modal() {

  return (
    <View style={styles.modal}>
    <View style={styles.cardmodal}>
        
        <View style={styles.iconmodal}>
            <Ionicons name="ios-star" size={26} color="#EEE" />
            <Ionicons style={styles.iconclose}name="ios-close" size={35} color="#EEE" />
        </View>

        <View style={styles.picmodal}>
            <View style={styles.cardicon}>
                <Ionicons style={styles.cardicon} name="person-circle-outline" size={80} color="#EEE" />
            </View>
        </View>

        <View style={styles.infomodal}>
            <Text style={styles.modaltitle}>Nome:</Text>
            <Text style={styles.modaltext}>Fernanda Peters</Text>
            
        </View>

        <View style={styles.infomodal}>
            <Text style={styles.modaltitle}>Stacks:</Text>
            <Text style={styles.modaltext}>JavaScript, React, ReactNative</Text>
            
        </View>

        <View style={styles.infomodal}>
            <Text style={styles.modaltitle}>Cidade:</Text>
            <Text style={styles.modaltext}>Florianópolis</Text>
            
        </View>

        <View style={styles.infomodal}>
            <Text style={styles.modaltitle}>Estado:</Text>
            <Text style={styles.modaltext}>Santa Catarina</Text>
            
        </View>

        
    </View>
</View>
  );
}


const styles = StyleSheet.create({
  modal:{
    backgroundColor: '#121214',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:20,
    opacity: 0.8,
},
cardmodal:{
    backgroundColor: '#121214',
    width: '90%',
    height: '90%',
    borderRadius: 6,
    alignItems: 'center',
},
iconmodal:{
    padding: 20,
    flexDirection:'row',
    left: 100,  
},
iconclose:{
    marginLeft: 15,
    top: -3,
},
picmodal: {
    width: 130,
    height: 130,
    backgroundColor: '#E1E1E6',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#5BDE66',
},
infomodal:{
    width: '85%',
    marginVertical: 10,
},
modaltitle:{
    fontFamily: 'Poppins_700Bold',
    fontSize: 12,
    color: '#DE8F45',
},
modaltext:{
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    color: '#fff',
},

    })