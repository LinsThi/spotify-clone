import { Feather } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import * as Sty from './styles';

export function SearchBar() {
  const { Colors } = useContext(ThemeContext);

  return (
    <Sty.Container>
      <Feather name="search" size={35} color={Colors.BLACK} />

      <Sty.SearchInput
        placeholder="Artistas, músicas ou podcasts"
        placeholderTextColor={Colors.GRAY}
      />
    </Sty.Container>
  );
}
