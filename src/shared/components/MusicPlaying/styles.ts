import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  position: absolute;
  bottom: ${({ theme }) => theme.Sizes.BOTTOM_TAB_MENU_SIZE}px;
`;

export const ContainerProgressBar = styled.View`
  padding: 0px 10px;
`;
