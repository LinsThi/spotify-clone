import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import React from 'react';

import { RoutesApp } from './shared/routes';

export default function App() {
  const [fontsloaded] = useFonts({ Roboto_700Bold, Montserrat_600SemiBold });

  if (!fontsloaded) {
    return <AppLoading />;
  }

  return <RoutesApp />;
}
