import React, { useState, useEffect } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Home } from '../../Screens/Home';
import AdminScreenNavigator from "../StackNavigator/AdminScreenNavigator";
import {Platform, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const MenuSideBar = ({bottomTabNavigator}) => {
  const [showScreenAdmin, setShowScreenAdmin] = useState(false);
  const environments = "Admin";
  useEffect(() => {
    environments === "Admin" ? setShowScreenAdmin(true) : setShowScreenAdmin(false);
  }, [])

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        options={{
          title: 'Bienvenido a DomoticAR',
          drawerLabel: `DomoticAR - ${environments}`,

        }}
        component={bottomTabNavigator}
      />

        {showScreenAdmin &&  <Drawer.Screen
            name="AdminScreens"
            options={({navigation}) => ({
                title: 'Administrador de Pantallas',
                headerRight: () => (
                    <TouchableOpacity onPress ={ () => navigation.navigate('NewRoom')}>
                        <Ionicons name="md-add" size={24} color={Platform.OS === 'android' ? 'black' : 'black'} />
                    </TouchableOpacity>
                )
            })}
            component={AdminScreenNavigator}
      />}
    </Drawer.Navigator>
  );
};

export default MenuSideBar;
