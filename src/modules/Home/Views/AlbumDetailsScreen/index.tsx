import { AntDesign, Feather, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import { FlatListAlbunsDetails } from '../../components/FlatListAlbunsDetails';
import albumDetails from '../../mock/albumDetails';

import * as Sty from './styles';

export function AlbumDetailsScreen() {
  const { Colors } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <Sty.Container>
      <Sty.ContainerHeader>
        <Sty.ButtonBack onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" color={Colors.WHITE} size={30} />
        </Sty.ButtonBack>

        <Sty.ImageAlbum source={{ uri: albumDetails.imageUri }} />

        <Sty.ContainerAlbumInfo>
          <Sty.NameAlbum>{albumDetails.name}</Sty.NameAlbum>

          <Sty.AlbumOwner>{albumDetails.by}</Sty.AlbumOwner>

          <Sty.ContainerInfoTimer>
            <Fontisto name="world-o" color={Colors.LIGHT_GRAY_2} size={18} />
            <Sty.LikesAlbum>
              {albumDetails.numberOfLikes} curtidas • {albumDetails.timeAlbum}
            </Sty.LikesAlbum>
          </Sty.ContainerInfoTimer>
        </Sty.ContainerAlbumInfo>

        <Sty.ContainerButtons>
          <Sty.Button>
            <AntDesign name="heart" size={33} color={Colors.GREEN} />
          </Sty.Button>

          <Sty.ButtonDownload>
            <Feather name="arrow-down-circle" size={33} color={Colors.WHITE} />
          </Sty.ButtonDownload>

          <Sty.Button>
            <Feather name="more-vertical" size={33} color={Colors.WHITE} />
          </Sty.Button>

          <Sty.ButtonPlay>
            <AntDesign name="play" size={50} color={Colors.GREEN} />
          </Sty.ButtonPlay>
        </Sty.ContainerButtons>
      </Sty.ContainerHeader>

      <FlatListAlbunsDetails />
    </Sty.Container>
  );
}
