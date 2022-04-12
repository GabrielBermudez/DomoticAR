import React, { useState, useEffect } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Home } from '../Screens/Home';
import { AdminScreens } from '../Screens/AdminScreens';

const Drawer = createDrawerNavigator();

export const MenuSideBar = ({environments}) => {
  const [showScreenAdmin, setShowScreenAdmin] = useState(false);

  useEffect(() => {
    environments === "Admin" ? setShowScreenAdmin(true) : setShowScreenAdmin(false);
  }, [])

  const adminScreens = () => {
    return (
        <Drawer.Screen
        name="AdminScreens"
        options={{
          title: 'Administrador de Pantallas', 

        }}
        component={AdminScreens}
      />
    );
      
  }
  
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        options={{
          title: 'Bienvenido a DomoticAR', 
          drawerLabel: `DomoticAR - ${environments}`,

        }}
        component={Home}
      />
      
     {showScreenAdmin &&  <Drawer.Screen
        name="AdminScreens"
        options={{
          title: 'Administrador de Pantallas', 

        }}
        component={AdminScreens}
      />}
    </Drawer.Navigator>
  );
};
