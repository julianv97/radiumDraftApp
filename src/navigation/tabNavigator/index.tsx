import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Match, History, Profile} from '../../screens';
import {Routes} from '../../interfaces/routes';
import {tabIcons, tabIconsFocused} from './constants';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {height: 95, paddingTop: 20},
        tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
        tabBarIcon: ({focused}) => {
          const Icon = focused
            ? tabIconsFocused[route.name as keyof typeof tabIconsFocused].Icon
            : tabIcons[route.name as keyof typeof tabIcons].Icon;
          return Icon;
        },
      })}>
      <Tab.Screen name={Routes.MATCH} component={Match} />
      <Tab.Screen name={Routes.HISTORY} component={History} />
      <Tab.Screen name={Routes.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
