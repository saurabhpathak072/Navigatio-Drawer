import 'react-native-gesture-handler';
import React from "react";
import { View, StyleSheet } from "react-native";
import Home from "./Pages/HomeScreen/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from './Pages/WelcomeScreen/Welcome';
import {Ionicons} from '@expo/vector-icons'
const Drawer = createDrawerNavigator();
const App = () => {
  const Stack = createDrawerNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{
            headerStyle:{backgroundColor:'#3c0a6b'},
            headerTintColor:'white',
            drawerActiveBackgroundColor:'#f0e1ff',
            drawerActiveTintColor:'#3c0a6b'
        }}>
          <Drawer.Screen
            name="homeScreen"
            component={Home}
            options={{
              drawerLabel:"Home Screen", 
              drawerIcon:({color,size})=>{
                return <Ionicons name='home' size={size} color={color}/>
              }
            }}
          />
          <Drawer.Screen name='welcome' component={Welcome} options={{
            drawerLabel:"User",
            drawerIcon:({color,size})=>{
                return <Ionicons color={color} name='person' size={size}/>
            }
          }}/>
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
