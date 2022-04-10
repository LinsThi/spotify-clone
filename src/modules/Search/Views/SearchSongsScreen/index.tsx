import React from 'react';

import { SearchInput } from '../../components/SearchInput';

import * as Sty from './styles';

export function SearchSongsScreen() {
  return (
    <Sty.Container>
      <Sty.ContainerInput>
        <SearchInput />
      </Sty.ContainerInput>

      <Sty.ContainerResults>
        <Sty.Text1>Find what you want to hear</Sty.Text1>
        <Sty.Text2>Search for artists, songs, podcasts and more.</Sty.Text2>
      </Sty.ContainerResults>
    </Sty.Container>
  );
}
