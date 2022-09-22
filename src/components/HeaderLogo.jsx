import { Text, View, StyleSheet} from 'react-native';


export function HeaderLogo() {


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
  },
  text1:{
    fontSize: 30,
    letterSpacing: -3,
    fontWeight: '400',
    fontFamily: 'Poppins_400Regular',
    color: 'white'
  },
  text2:{
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: -3,
    color: '#5BDE66',
    fontFamily: 'Poppins_700Bold'
  },
})