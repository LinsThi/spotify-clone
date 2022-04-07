import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BLACK};
`;

export const ContainerSearch = styled.View`
  padding: 40px 20px 20px;
`;

export const TitlePage = styled.Text`
  font-size: ${({ theme }) => theme.FontSizes.TEXT_PERIODE_SIZE}px;
  color: ${({ theme }) => theme.Colors.WHITE};
  font-family: 'Roboto_700Bold';
  margin-bottom: 40px;
`;
