import React, { useCallback } from 'react';

import { albunsPlaylist } from '../../Views/Header/mock';

import * as Sty from './styles';

export function FlatListPlaylists() {
  const renderAlbum = useCallback(
    ({ item }) => (
      <Sty.ContainerItem>
        <Sty.ImageAlbum source={{ uri: item.albumLink }} />

        <Sty.ContainerTitle>
          <Sty.TitleAlbum numberOfLines={2}>{item.title}</Sty.TitleAlbum>
        </Sty.ContainerTitle>
      </Sty.ContainerItem>
    ),
    [],
  );

  return (
    <Sty.FlatList
      data={albunsPlaylist}
      extraData={albunsPlaylist}
      keyExtractor={(_, index) => index.toString()}
      numColumns={2}
      renderItem={renderAlbum}
    />
  );
}
