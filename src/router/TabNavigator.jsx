import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapHome from '../screens/map/MapHome';
import Notes from '../screens/notes/Notes';

import {FAVORITE, HOME, NOTES, PROFILE} from '../utils/route';
import Favorite from '../screens/favorite/Favorite';
import {Colors} from '../theme/colors';
import TabIcon from '../components/TabIcon';
import Profile from '../screens/profile/Profile';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        tabBarActiveTintColor: Colors.DARKBLUE,
        tabBarInactiveTintColor: Colors.GRAY,
        //tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name={HOME}
        component={MapHome}
        options={{headerShown: false}}
      />
      <Tab.Screen name={FAVORITE} component={Favorite} />
      <Tab.Screen
        name={NOTES}
        component={Notes}
        options={{headerShown: false}}
      />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
