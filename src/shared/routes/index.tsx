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
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { LibraryScreen } from '~/modules/Library/Views/LibraryScreen';
import { PremiumScreen } from '~/modules/Premium/Views/PremiumScreen/PremiumScreen';
import theme from '~/shared/theme';

import { MusicPlaying } from '../components/MusicPlaying';
import {
  HOME_STACK,
  LIBRARY_SCREEN,
  PREMIUM_SCREEN,
  SEARCH_STACK,
} from '../constantes/routes';
import { HomeScreenStack } from './homeStack';
import { SearchScreenStack } from './searchStack';

const Tabs = createBottomTabNavigator();

export function RoutesApp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={theme.Colors.BLACK} style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled={false}
      >
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Tabs.Navigator
              initialRouteName={HOME_STACK}
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
                component={HomeScreenStack}
                name={HOME_STACK}
                options={{
                  tabBarIcon: ({ color }) => (
                    <Foundation name="home" size={35} color={color} />
                  ),
                }}
              />
              <Tabs.Screen
                component={SearchScreenStack}
                name={SEARCH_STACK}
                options={{
                  tabBarIcon: ({ color }) => (
                    <Feather name="search" size={35} color={color} />
                  ),
                }}
              />
              <Tabs.Screen
                component={LibraryScreen}
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
                component={PremiumScreen}
                name={PREMIUM_SCREEN}
                options={{
                  tabBarIcon: ({ color }) => (
                    <Entypo name="spotify" size={35} color={color} />
                  ),
                }}
              />
            </Tabs.Navigator>
          </NavigationContainer>

          <MusicPlaying />
        </ThemeProvider>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
