import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import React from 'react';

import { MusicPlayingMock } from './mock';

import * as Sty from './styles';

export function MusicPlaying() {
  return (
    <Sty.Container backgroundColor={MusicPlayingMock.backgroundColor}>
      <Sty.ImageMusic
        source={{ uri: MusicPlayingMock.imageUri }}
        resizeMode="contain"
      />

      <Sty.ContainerInfoMusic>
        <Sty.NameMusic
          animation="slideInRight"
          duration={3000}
          iterationCount="infinite"
          easing="linear"
          numberOfLines={1}
        >
          {MusicPlayingMock.name}
        </Sty.NameMusic>
        <Sty.NameArtist>{MusicPlayingMock.artist}</Sty.NameArtist>
      </Sty.ContainerInfoMusic>

      <Sty.ContainerButtons>
        <Sty.Button>
          <MaterialCommunityIcons
            name="monitor-speaker"
            size={24}
            color="#fff"
          />
        </Sty.Button>

        <Sty.Button>
          <AntDesign name="hearto" size={24} color="#fff" />
        </Sty.Button>

        <Sty.Button>
          <FontAwesome name="play" size={24} color="#fff" />
        </Sty.Button>
      </Sty.ContainerButtons>
    </Sty.Container>
  );
}
