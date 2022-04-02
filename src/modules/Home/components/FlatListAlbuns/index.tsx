import React, { useCallback } from 'react';

import { NUMBER_LINES_NAME_ALBUM } from '~/shared/constantes';

import albumCategories from '../../mock/albumCategories';

import * as Sty from './styles';

export function FlatListAlbuns() {
  const renderAlbum = useCallback(({ item }) => {
    return (
      <Sty.ContainerItem>
        <Sty.ImageAlbum source={{ uri: item.imageUri }} />

        <Sty.NameAlbum numberOfLines={NUMBER_LINES_NAME_ALBUM}>
          {item.artistsHeadline}
        </Sty.NameAlbum>
      </Sty.ContainerItem>
    );
  }, []);

  const renderCategories = useCallback(({ item }) => {
    return (
      <Sty.ContainerCategory>
        <Sty.NameCategory>{item.title}</Sty.NameCategory>

        <Sty.FlatListAlbuns
          data={item.albums}
          extraData={item.albums}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderAlbum}
          horizontal
        />
      </Sty.ContainerCategory>
    );
  }, []);

  return (
    <Sty.FlatList
      data={albumCategories}
      extraData={albumCategories}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderCategories}
    />
  );
}
