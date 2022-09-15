import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import Amplify from 'aws-amplify';
import { StatusBar, StyleSheet, View } from 'react-native';
import awsconfig from './src/aws-exports';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store'

Amplify.configure(awsconfig)


const App = () => {



  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (

    <View style={styles.container}>
      <StatusBar
        barStyle='light-content'
        translucent={true}
        backgroundColor='transparent'
      />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
  },
});


export default App