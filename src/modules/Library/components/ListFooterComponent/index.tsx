import { Feather } from '@expo/vector-icons';
import React from 'react';

import * as Sty from './styles';

export function ListFooterComponent() {
  return (
    <Sty.ContainerFooter>
      <Sty.ButtonFooter>
        <Sty.ContainerButtonFooter isCircle>
          <Feather name="plus" color="#fff" size={35} />
        </Sty.ContainerButtonFooter>

        <Sty.NamePlaylist>Add artists</Sty.NamePlaylist>
      </Sty.ButtonFooter>

      <Sty.ButtonFooter>
        <Sty.ContainerButtonFooter>
          <Feather name="plus" color="#fff" size={35} />
        </Sty.ContainerButtonFooter>

        <Sty.NamePlaylist>Add podcasts and programs</Sty.NamePlaylist>
      </Sty.ButtonFooter>
    </Sty.ContainerFooter>
  );
}
