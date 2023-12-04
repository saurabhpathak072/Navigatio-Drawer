import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()
  const onPressDrawerToggle=()=>{
    navigation.toggleDrawer();
  }
  return (
    <View>
      <Text>Home</Text>
      <Button title='openDrawer' onPress={onPressDrawerToggle}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})