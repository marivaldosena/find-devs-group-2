import { View, Text,StyleSheet,Dimensions } from 'react-native';
import { HeaderLogo } from './HeaderLogo';
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { Auth, Hub } from 'aws-amplify'

export function Header(props) {
  
  async function signOut(){
    try {
      await Auth.signOut()
      
    } catch (error) {
      console.log(error)
    }
  }
    const navigate = useNavigation().navigate
  return (
    <View style={styles.container}>
        <HeaderLogo/>
        <Entypo name="log-out" size={20} color="#E1E1E6" 
        onPress={()=> {
          if(props.onpress == 'signout'){
            signOut()
            return
          }
          if(props.onpress == 'signin'){
            navigate('SignIn')
            return
          }
          if(props.onpress == 'home'){
            navigate('Home')
          }
        }
        
        }/>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'e',
        width: Dimensions.get('window').width,
        height: 140,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 40,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
})