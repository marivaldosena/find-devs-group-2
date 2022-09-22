import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Confirm from '../screens/Confirm';
import Forgot from '../screens/Forgot';
import Reset from '../screens/Reset';
import Home from '../screens/Home';
import Favs from '../screens/Favs';
import { Auth, Hub } from 'aws-amplify'
import { ActivityIndicator, View } from 'react-native';


const Stack = createNativeStackNavigator();



const Navigation = () => {

  const [user, setUser] = useState(undefined)


  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true })
      setUser(authUser)

    } catch (error) {
      setUser(null)
    }

  }


  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser()
      }
    }

    Hub.listen('auth', listener)
  }, [])

  if (user === undefined) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222' }}
      >
        <ActivityIndicator
          size={36}
        />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (<>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Favs" component={Favs} />
        </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ConfirmEmail" component={Confirm} />
            <Stack.Screen name="ForgotPassword" component={Forgot} />
            <Stack.Screen name="NewPassword" component={Reset} />

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
