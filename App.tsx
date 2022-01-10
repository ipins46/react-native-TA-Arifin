import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/components/Theme';

import { LoadAssets } from './src/components';
import { AppRoutes } from './src/components/Navigation';
import { AuthenticationNavigator, assets as authAssets } from './src/Authentication';
import { HomeNavigator, assets as homeAssets } from './src/Home';
import { useEffect, useMemo, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './src/Context/context';
import axios from 'axios';

const assets = [...authAssets, ...homeAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        // console.log('userToken', userToken);
      } catch (e) {
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      sigIn: async (email, password) => {
        let res;
        try {
            res = await axios.post('http://192.168.43.109:3000/api/login', {
            email,
            password
          });
        } catch (error) {
  
        }
        if(res?.status === 201){
          await AsyncStorage.setItem('userToken', JSON.stringify(res.data));
          const userToken = await AsyncStorage.getItem('userToken')
          dispatch({ type: 'SIGN_IN', token: userToken })
        }
      },
      signOut: async () => {
        let res;
        try {
            res = await axios.post('http://192.168.43.109:3000/api/logout');
        } catch (error) {
  
        }
        if(res?.status === 201){
          await AsyncStorage.removeItem('userToken')
          dispatch({ type: 'SIGN_OUT'})
        }
      },
      signUp: async data => {
        
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', data });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <ThemeProvider>
          <LoadAssets {...{ fonts, assets }}>
            <SafeAreaProvider>
              <AppStack.Navigator screenOptions={{headerShown: false}}>
              {state.userToken == null ? (
                <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
              ) : (
                <AppStack.Screen name="Home" component={HomeNavigator} />
              )}
                {/* <AppStack.Screen name="Authentication" component={AuthenticationNavigator} /> */}
                {/* <AppStack.Screen name="Home" component={HomeNavigator} /> */}
              </AppStack.Navigator>
            </SafeAreaProvider>
          </LoadAssets>
        </ThemeProvider>
    </AuthContext.Provider>

    
  );
}