import { Text, View, StyleSheet} from 'react-native';

export function Logo() {


  return (
    <View style={styles.container}>
        <Text style={styles.text1}>find.</Text>
        <Text style={styles.text2}>Devs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginTop : 100 ,
    marginBottom: 20
  },
  text1:{
    fontSize: 50,
    letterSpacing: -5,
    fontWeight: '300',
    fontFamily: 'Poppins_400Regular',
    color: 'white'
  },
  text2:{
    fontSize: 50,
    fontWeight: '700',
    letterSpacing: -3,
    color: '#5BDE66',
    fontFamily: 'Poppins_700Bold'
  },
})