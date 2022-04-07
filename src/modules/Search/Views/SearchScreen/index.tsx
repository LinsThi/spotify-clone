import React from 'react';

import { FlatListAlbuns } from '../../components/FlatListAlbuns';
import { SearchBar } from '../../components/SearchBar';

import * as Sty from './styles';

export function SearchScreen() {
  return (
    <Sty.Container>
      <Sty.ContainerSearch>
        <Sty.TitlePage>Buscar</Sty.TitlePage>

        <SearchBar />

        <FlatListAlbuns />
      </Sty.ContainerSearch>
    </Sty.Container>
  );
}
