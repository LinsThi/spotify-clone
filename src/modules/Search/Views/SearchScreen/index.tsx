import React from 'react';

import { FlatListAlbuns } from '../../components/FlatListAlbuns';
import { SearchBar } from '../../components/SearchBar';

import * as Sty from './styles';

export function SearchScreen() {
  return (
    <Sty.Container stickyHeaderIndices={[1]}>
      <Sty.TitlePage>Buscar</Sty.TitlePage>

      <Sty.ContainerSearch>
        <SearchBar />
      </Sty.ContainerSearch>

      <Sty.ContainerFlatlist>
        <FlatListAlbuns />
      </Sty.ContainerFlatlist>
    </Sty.Container>
  );
}
