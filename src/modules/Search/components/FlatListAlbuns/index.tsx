import React, { useCallback } from 'react';

import categories from '../../mock/categories';

import * as Sty from './styles';

export function FlatListAlbuns() {
  const renderAlbuns = useCallback(({ item }) => {
    return (
      <Sty.ContainerAlbum backgroundColor={item.backgroundColor}>
        <Sty.NameAlbum>{item.nameAlbum}</Sty.NameAlbum>
        <Sty.ImageAlbum source={{ uri: item.imageUri }} />
      </Sty.ContainerAlbum>
    );
  }, []);

  const renderCategory = useCallback(({ item }) => {
    return (
      <Sty.ContainerCategory>
        <Sty.NamePlaylist>{item.title}</Sty.NamePlaylist>
        <Sty.FlatListAlbuns
          data={item.albuns}
          extraData={item.albuns}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderAlbuns}
          horizontal
        />
      </Sty.ContainerCategory>
    );
  }, []);

  return (
    <Sty.FlatListCategory
      data={categories}
      extraData={categories}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderCategory}
    />
  );
}
