import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components/native';

import { MusicPlayingMock } from '../MusicPlaying/mock';

import * as Sty from './styles';

export function MusicInfoPlaying() {
  const { Colors } = useContext(ThemeContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

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
            color={Colors.WHITE}
          />
        </Sty.Button>

        <Sty.Button onPress={() => setIsLiked(prev => !prev)}>
          {isLiked ? (
            <AntDesign name="heart" size={24} color={Colors.GREEN} />
          ) : (
            <AntDesign name="hearto" size={24} color={Colors.WHITE} />
          )}
        </Sty.Button>

        <Sty.Button onPress={() => setIsPlaying(prev => !prev)}>
          {isPlaying ? (
            <FontAwesome name="play" size={24} color={Colors.WHITE} />
          ) : (
            <FontAwesome name="pause" size={24} color={Colors.WHITE} />
          )}
        </Sty.Button>
      </Sty.ContainerButtons>
    </Sty.Container>
  );
}
