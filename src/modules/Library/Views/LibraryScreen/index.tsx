import React from 'react';

import { FlatListLibraryPlaylists } from '../../components/FlatListPlaylists';
import { Header } from '../../components/Header';

import * as Sty from './styles';

export function LibraryScreen() {
  return (
    <Sty.Container>
      <Header />

      <FlatListLibraryPlaylists />
    </Sty.Container>
  );
}
