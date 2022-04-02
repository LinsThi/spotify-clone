import 'styled-components';

type ColorsProps = {
  BLACK: string;
  DARK_PINK: string;
  DARK_BLUE: string;
  LIGHT_BLUE: string;
  DARK_GRAY: string;
  WHITE: string;
};

type FontSizesProps = {
  TEXT_PERIODE_SIZE: number;
  LABEL_TAB_SIZE: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorsProps;
    FontSizes: FontSizesProps;
  }
}
