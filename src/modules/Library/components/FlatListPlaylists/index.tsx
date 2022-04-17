import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useCallback, useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import playlists from '../../mock/playlists';
import { ListFooterComponent } from '../ListFooterComponent';
import { ListHeaderComponent } from '../ListHeaderComponent';

import * as Sty from './styles';

export function FlatListLibraryPlaylists() {
  const { Colors } = useContext(ThemeContext);

  const renderPlaylists = useCallback(({ item }) => {
    return (
      <Sty.ContainerPlaylist>
        <Sty.ImagePlaylist source={{ uri: item.thumbnailPlaylist }} />

        <Sty.ContainerInfoPlaylist>
          <Sty.NamePlaylist>{item.title}</Sty.NamePlaylist>

          <Sty.InfoPlaylist>
            {item.isFixed && (
              <Sty.IconView>
                <MaterialCommunityIcons
                  name="pin"
                  size={20}
                  color={Colors.GREEN}
                />
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
      ListHeaderComponent={() => <ListHeaderComponent />}
      ListFooterComponent={() => <ListFooterComponent />}
    />
  );
}
