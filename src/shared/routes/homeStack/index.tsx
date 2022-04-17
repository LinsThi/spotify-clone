import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { AlbumDetailsScreen } from '~/modules/Home/Views/AlbumDetailsScreen';
import { HomeScreen } from '~/modules/Home/Views/HomeScreen';
import { HOME_SCREEN, ALBUM_SCREEN } from '~/shared/constantes/routes';

const StackHomeScreen = createStackNavigator();

export function HomeScreenStack() {
  return (
    <StackHomeScreen.Navigator screenOptions={{ headerShown: false }}>
      <StackHomeScreen.Screen name={HOME_SCREEN} component={HomeScreen} />
      <StackHomeScreen.Screen
        name={ALBUM_SCREEN}
        component={AlbumDetailsScreen}
      />
    </StackHomeScreen.Navigator>
  );
}
