import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.Colors.WHITE};
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => theme.FontSizes.PLACEHOLDER_SEARCH_SIZE}px;
  padding-left: 10px;
  font-weight: bold;
`;
