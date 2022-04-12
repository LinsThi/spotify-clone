import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useCallback } from 'react';

import playlists from '../../mock/playlists';

import * as Sty from './styles';

export function FlatListLibraryPlaylists() {
  const renderPlaylists = useCallback(({ item }) => {
    return (
      <Sty.ContainerPlaylist>
        <Sty.ImagePlaylist source={{ uri: item.thumbnailPlaylist }} />

        <Sty.ContainerInfoPlaylist>
          <Sty.NamePlaylist>{item.title}</Sty.NamePlaylist>

          <Sty.InfoPlaylist>
            {item.isFixed && (
              <Sty.IconView>
                <MaterialCommunityIcons name="pin" size={20} color="#30ba61" />
              </Sty.IconView>
            )}
            {item.typePlaylist} • {item.author}
          </Sty.InfoPlaylist>
        </Sty.ContainerInfoPlaylist>
      </Sty.ContainerPlaylist>
    );
  }, []);

  return (
    <Sty.FlatList
      data={playlists}
      extraData={playlists}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderPlaylists}
    />
  );
}
