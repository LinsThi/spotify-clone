import styled from 'styled-components/native';

type ContainerAlbumProps = {
  backgroundColor: string;
};

export const ContainerAlbum = styled.TouchableOpacity<ContainerAlbumProps>`
  width: 175px;
  height: 120px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ContainerCategory = styled.View``;

export const NamePlaylist = styled.Text`
  color: ${({ theme }) => theme.Colors.WHITE};
  font-size: ${({ theme }) => theme.FontSizes.TEXT_NAME_CATEGORY - 10}px;
  margin-top: 20px;
`;

export const NameAlbum = styled.Text`
  font-size: ${({ theme }) => theme.FontSizes.TEXT_NAME_ALBUM}px;
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.WHITE};

  padding-top: 10px;
  padding-left: 10px;
  position: absolute;
`;

export const ImageAlbum = styled.Image`
  width: 80px;
  height: 80px;
  transform: rotate(20deg);
  position: absolute;
  right: -20px;
  bottom: 0px;
`;

export const FlatListCategory = styled.FlatList`
  margin-bottom: ${({ theme }) =>
    theme.Sizes.BOTTOM_TAB_MENU_SIZE + theme.Sizes.HEIGHT_MUSIC_PLAYING_SIZE}px;
`;

export const FlatListAlbuns = styled.FlatList``;
