import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.Colors.WHITE};
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  align-items: center;
`;

export const SearchInput = styled.Text`
  font-size: ${({ theme }) => theme.FontSizes.PLACEHOLDER_SEARCH_SIZE}px;
  color: ${({ theme }) => theme.Colors.GRAY};
  padding-left: 10px;
  font-weight: bold;
`;
