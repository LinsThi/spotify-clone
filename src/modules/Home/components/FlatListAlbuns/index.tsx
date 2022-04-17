import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { NUMBER_LINES_NAME_ALBUM } from '~/shared/constantes';
import { ALBUM_SCREEN } from '~/shared/constantes/routes';

import albumCategories from '../../mock/albumCategories';

import * as Sty from './styles';

export function FlatListAlbuns() {
  const navigation = useNavigation();

  const renderAlbum = useCallback(({ item }) => {
    return (
      <Sty.ContainerItem
        onPress={() => navigation.navigate(ALBUM_SCREEN as never)}
      >
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
