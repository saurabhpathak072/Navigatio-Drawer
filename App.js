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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Drawer = createDrawerNavigator();
const App = () => {
  const Stack = createDrawerNavigator();
  const BottomTabNavigator = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
       
        <BottomTabNavigator.Navigator screenOptions={{
            headerStyle:{backgroundColor:'#3c0a6b'},
            headerTintColor:'white',
            tabBarActiveBackgroundColor:'#ccc'
        }}>
          <BottomTabNavigator.Screen
            name="homeScreen"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarActiveTintColor: '#3c0a6b',
             tabBarIcon:({color,size})=><Ionicons name='home' size={size} color={color} />
            }}
          />
          <BottomTabNavigator.Screen name='welcome' component={Welcome} options={{
            tabBarActiveTintColor: '#3c0a6b',
            tabBarLabel: "User",
            tabBarIcon:({color,size})=><Ionicons name='person' size={size} color={color} />
          }}/>
        </BottomTabNavigator.Navigator>
      </NavigationContainer> 
      <StatusBar style="light" />
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
