import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminScreens } from '../../Screens/AdminScreens';
import { Home } from '../../Screens/Home';
import { Entypo, MaterialIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
//<MaterialIcons name="add-to-home-screen" size={24} color="black" />
///<Entypo name="home" size={24} color="black" />

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
        <Tab.Screen name="Inicio" component={Home} options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Entypo name="home" size={24} color="black" />
              <Text>Inicio</Text>
            </View>
          )}}/>
        <Tab.Screen name="Administrador de Pantallas" component={AdminScreens} options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <MaterialIcons name="add-to-home-screen" size={24} color="black" />
              <Text>Pantallas</Text>
            </View>
          )}}/>
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: 'absolute',
    left: 10,
    right: 10,
    borderRadius: 10,
    backgroundColor: 'whitesmoke'
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default BottomTabNavigator;