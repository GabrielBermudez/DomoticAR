import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AdminScreens} from "../../Screens/AdminScreens";
import AddRoom from "../../Screens/AddRoom";
import ViewRoom from "../../Screens/ViewRoom";

const Stack = createStackNavigator();

const AdminScreenNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            //headerShown: false
        }}>
            <Stack.Screen name="Home" component={AdminScreens} options={{
                title: 'Habitaciones',
            }}/>
            <Stack.Screen name="NewRoom" component={AddRoom} options={{
                title: 'Agregar Habitación',
            }}/>

            <Stack.Screen name="ViewRoom" component={ViewRoom} options={{
                title: 'Habitación'
            }} />

        </Stack.Navigator>
    );
};

export default AdminScreenNavigator;
