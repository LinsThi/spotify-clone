import 'styled-components';

type ColorsProps = {
  BLACK: string;
  DARK_PINK: string;
  BLUE: string;
  DARK_BLUE: string;
  LIGHT_BLUE: string;
  LIGHT_GRAY: string;
  GRAY: string;
  DARK_GRAY: string;
  WHITE: string;
};

type FontSizesProps = {
  TEXT_PERIODE_SIZE: number;
  TEXT_NAME_CATEGORY: number;
  TEXT_NAME_ALBUM: number;
  LABEL_TAB_SIZE: number;
  PLACEHOLDER_SEARCH_SIZE: number;
};

type SizesProps = {
  BOTTOM_TAB_MENU_SIZE: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorsProps;
    FontSizes: FontSizesProps;
    Sizes: SizesProps;
  }
}
