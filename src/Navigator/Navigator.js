import React from 'react';
import MenuSideBar from './MenuSideBar'
import BottomTabNavigator from './BottomTabNavigator';

const Navigator = () => {
    return (
        <MenuSideBar bottomTabNavigator={BottomTabNavigator} />
    );

}

export default Navigator;