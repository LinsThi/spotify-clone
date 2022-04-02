import styled from 'styled-components/native';

export const FlatList = styled.FlatList`
  margin: 30px 5px 0px;
`;

export const ContainerItem = styled.TouchableOpacity`
  flex-direction: row;
  padding-right: 5px;
  padding-bottom: 10px;
  width: 200px;
`;

export const ContainerTitle = styled.View`
  flex: 0.9;
  justify-content: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background: ${({ theme }) => theme.Colors.DARK_GRAY};
`;

export const ImageAlbum = styled.Image`
  width: 55px;
  height: 55px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const TitleAlbum = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.Colors.WHITE};
  font-size: 16px;
  font-family: 'Roboto_700Bold';
  padding: 0px 10px;
`;
