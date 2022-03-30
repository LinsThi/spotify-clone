import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeScreen } from '~/modules/Home/Views/HomeScreen';

import {
  HOME_SCREEN,
  LIBRARY_SCREEN,
  PREMIUM_SCREEN,
  SEARCH_SCREEN,
} from '../constantes/routes';

const Tabs = createBottomTabNavigator();

export function RoutesApp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tabs.Navigator initialRouteName={HOME_SCREEN}>
          <Tabs.Screen component={HomeScreen} name={HOME_SCREEN} />
          <Tabs.Screen component={HomeScreen} name={SEARCH_SCREEN} />
          <Tabs.Screen component={HomeScreen} name={LIBRARY_SCREEN} />
          <Tabs.Screen component={HomeScreen} name={PREMIUM_SCREEN} />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
