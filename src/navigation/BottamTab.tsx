import React from 'react';
import { Image } from 'react-native';

import MainScreen from 'src/screens/Nutrition/MainScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LkScreen } from '@screens';

import { Screens } from './routes';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === Screens.MainScreen) {
            iconName = focused
              ? require('../assets/images/Nactive.png') // Replace with your active icon
              : require('../assets/images/NunActive.png'); // Replace with your inactive icon
          } else if (route.name === Screens.LkScreen) {
            iconName = focused
              ? require('../assets/images/Pactive.png') // Replace with your active icon
              : require('../assets/images/PunActive.png'); // Replace with your inactive icon
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 24, height: 24 }} />;
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarActiveTintColor: '#B8FF5F', // Active label color
        tabBarInactiveTintColor: 'gray', // Inactive label color
        tabBarStyle: {
          backgroundColor: '#000', // Background color of the tab bar
        },
      })}
    >
      <Tab.Screen
        name={Screens.MainScreen}
        component={MainScreen}
        options={{ tabBarLabel: 'Nutrition' }}
      />
      <Tab.Screen
        name={Screens.LkScreen}
        component={LkScreen}
        options={{ tabBarLabel: 'Plan' }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
