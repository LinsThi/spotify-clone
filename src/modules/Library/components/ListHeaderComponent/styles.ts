import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ButtonLabel = styled.TouchableOpacity`
  padding: 7px 20px;
  margin-right: 10px;
  margin-top: 20px;
  border: 1px ${({ theme }) => theme.Colors.LIGHT_GRAY_2};
  border-radius: 20px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.Colors.WHITE};
  font-size: ${({ theme }) => theme.FontSizes.TEXT_SEARCH_INFO}px;
`;
