import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BLACK};
`;

export const ContainerSearch = styled.View`
  padding: 5px 10px 0px;
  background-color: ${({ theme }) => theme.Colors.BLACK};
`;

export const ContainerFlatlist = styled.View`
  padding: 0px 10px;
`;

export const TitlePage = styled.Text`
  font-size: ${({ theme }) => theme.FontSizes.TEXT_PERIODE_SIZE}px;
  color: ${({ theme }) => theme.Colors.WHITE};
  font-family: 'Roboto_700Bold';
  margin-bottom: 40px;
  padding: 30px 10px 0px;
`;
