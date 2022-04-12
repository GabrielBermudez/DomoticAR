import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Home } from '../Screens/Home';

const Drawer = createDrawerNavigator();

export const MenuSideBar = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        options={{title: 'Bienvenido a DomoticAR'}}
        component={Home}
      />
    </Drawer.Navigator>
  );
};
