import { Feather } from '@expo/vector-icons';
import React, { useCallback, useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import albumDetails from '../../mock/albumDetails';

import * as Sty from './styles';

export function FlatListAlbunsDetails() {
  const { Colors } = useContext(ThemeContext);

  const renderAlbum = useCallback(({ item }) => {
    return (
      <Sty.ContainerAlbum>
        <Sty.ImageAlbum source={{ uri: item.imageUri }} resizeMode="contain" />

        <Sty.ContainerAlbumInfo>
          <Sty.NameAlbum numberOfLines={1}>{item.title}</Sty.NameAlbum>

          <Sty.ArtistName numberOfLines={1}>{item.artist}</Sty.ArtistName>
        </Sty.ContainerAlbumInfo>

        <Sty.Button>
          <Feather name="more-vertical" size={33} color={Colors.WHITE} />
        </Sty.Button>
      </Sty.ContainerAlbum>
    );
  }, []);

  return (
    <Sty.FlatList
      data={albumDetails.songs}
      extraData={albumDetails.songs}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderAlbum}
    />
  );
}
