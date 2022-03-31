import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import React from 'react';

import { RoutesApp } from './shared/routes';

export default function App() {
  const [fontsloaded] = useFonts({ Roboto_700Bold });

  if (!fontsloaded) {
    return <AppLoading />;
  }

  return <RoutesApp />;
}
