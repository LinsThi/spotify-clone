import { Feather } from '@expo/vector-icons';
import React from 'react';

import * as Sty from './styles';

export function Header() {
  return (
    <Sty.Container>
      <Sty.ContainerUser>
        <Sty.ImageUser
          source={{
            uri: 'https://criticalhits.com.br/wp-content/uploads/2020/10/20200412-nezuko-1.jpg',
          }}
        />

        <Sty.TextScreen>Your Library</Sty.TextScreen>
      </Sty.ContainerUser>

      <Sty.ContainerButtons>
        <Sty.ButtonSearch>
          <Feather name="search" color="#fff" size={35} />
        </Sty.ButtonSearch>

        <Sty.ButtonAdd>
          <Feather name="plus" color="#fff" size={35} />
        </Sty.ButtonAdd>
      </Sty.ContainerButtons>
    </Sty.Container>
  );
}
