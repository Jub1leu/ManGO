import React, {Component} from 'react';
import {View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {MapScreen, ListScreen, QrScreen} from './src/screens';
import Ionicons from  'react-native-vector-icons/Ionicons'

const TabNavigator = createBottomTabNavigator(
  {
  Mapa: MapScreen,
  Lista: ListScreen,
  Qr: QrScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#f7b74e',
      inactiveTintColor: '#3f3f3f',
      style: {
        backgroundColor : 'white',
    },
    showLabel: false,
  },
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let IconComponent = Ionicons;
      let iconName;

      if (routeName === 'Mapa'){
        iconName = 'md-locate';
      }else if (routeName === 'Lista'){
        iconName = 'md-bus';
      }else if (routeName === 'Qr'){
        iconName = 'md-qr-scanner';
      }
      return <IconComponent name={iconName} size={25} color={tintColor}/>
    }
  })
  }
);
export default createAppContainer(TabNavigator);
