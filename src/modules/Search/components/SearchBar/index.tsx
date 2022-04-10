import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import { SEARCH_BUTTON_SCREEN } from '~/shared/constantes/routes';

import * as Sty from './styles';

export function SearchBar() {
  const { Colors } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <Sty.Container
      onPress={() => navigation.navigate(SEARCH_BUTTON_SCREEN as never)}
    >
      <Feather name="search" size={35} color={Colors.BLACK} />

      <Sty.SearchInput>Artistas, músicas ou podcasts</Sty.SearchInput>
    </Sty.Container>
  );
}
