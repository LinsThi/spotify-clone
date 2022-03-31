import React from 'react';
import { Text } from 'react-native';

import * as Sty from './styles';

export function HomeScreen() {
  return (
    <Sty.Container>
      <Text style={{ fontFamily: 'Roboto_700Bold', color: '#fff' }}>Olá</Text>
    </Sty.Container>
  );
}
