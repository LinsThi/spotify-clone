import React from 'react';

import { FlatListAlbuns } from '../../components/FlatListAlbuns';
import { Header } from '../Header';

import * as Sty from './styles';

export function HomeScreen() {
  return (
    <Sty.Container>
      <Header />

      <FlatListAlbuns />
    </Sty.Container>
  );
}
