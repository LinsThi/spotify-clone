import {
  Foundation,
  Feather,
  MaterialCommunityIcons,
  Entypo,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { HomeScreen } from '~/modules/Home/Views/HomeScreen';
import { SearchScreen } from '~/modules/Search/Views/SearchScreen';
import theme from '~/shared/theme';

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
      <StatusBar backgroundColor={theme.Colors.BLACK} style="light" />
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tabs.Navigator
            initialRouteName={HOME_SCREEN}
            screenOptions={{
              headerShown: false,
              tabBarLabelStyle: {
                fontSize: theme.FontSizes.LABEL_TAB_SIZE,
                paddingBottom: 10,
              },
              tabBarStyle: {
                position: 'absolute',
                height: theme.Sizes.BOTTOM_TAB_MENU_SIZE,
                paddingTop: 15,
                backgroundColor: theme.Colors.BLACK,
                borderTopColor: 'transparent',
              },
              tabBarActiveTintColor: theme.Colors.WHITE,
            }}
          >
            <Tabs.Screen
              component={HomeScreen}
              name={HOME_SCREEN}
              options={{
                tabBarIcon: ({ color }) => (
                  <Foundation name="home" size={35} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              component={SearchScreen}
              name={SEARCH_SCREEN}
              options={{
                tabBarIcon: ({ color }) => (
                  <Feather name="search" size={35} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              component={HomeScreen}
              name={LIBRARY_SCREEN}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="bookshelf"
                    size={35}
                    color={color}
                  />
                ),
              }}
            />
            <Tabs.Screen
              component={HomeScreen}
              name={PREMIUM_SCREEN}
              options={{
                tabBarIcon: ({ color }) => (
                  <Entypo name="spotify" size={35} color={color} />
                ),
              }}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
