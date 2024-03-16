import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from "firebase/app";
import { Login } from "./src/components/LoginPage/Login.jsx";
import { Register } from './src/components/Register/Register.jsx';
import { Home } from "./src/components/Home/Home.jsx";
import { Favorites } from "./src/components/Favorites/Favorites.jsx";
import { SideBar } from "./src/components/SideBar/SideBar.jsx";

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyD3HXzevNInkDNN9fwGGj_mI176aO92yGM",
  authDomain: "leavy-grumpy-testes.firebaseapp.com",
  projectId: "leavy-grumpy-testes",
  storageBucket: "leavy-grumpy-testes.appspot.com",
  messagingSenderId: "30398015372",
  appId: "1:30398015372:web:ba0e247728886834cc18a9",
};

initializeApp(firebaseConfig);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
        <Stack.Screen name="SideBar" component={SideBar} options={{ headerShown: false }} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App;
