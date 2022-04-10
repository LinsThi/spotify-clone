import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { SearchScreen } from '~/modules/Search/Views/SearchScreen';
import { SearchSongsScreen } from '~/modules/Search/Views/SearchSongsScreen';
import {
  SEARCH_BUTTON_SCREEN,
  SEARCH_SCREEN,
} from '~/shared/constantes/routes';

const StackSearchScreen = createStackNavigator();

export function SearchScreenStack() {
  return (
    <StackSearchScreen.Navigator screenOptions={{ headerShown: false }}>
      <StackSearchScreen.Screen name={SEARCH_SCREEN} component={SearchScreen} />
      <StackSearchScreen.Screen
        name={SEARCH_BUTTON_SCREEN}
        component={SearchSongsScreen}
      />
    </StackSearchScreen.Navigator>
  );
}
