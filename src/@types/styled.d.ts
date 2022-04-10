import 'styled-components';

type ColorsProps = {
  BLACK: string;
  BLACK_2: string;
  DARK_PINK: string;
  BLUE: string;
  DARK_BLUE: string;
  LIGHT_BLUE: string;
  LIGHT_GRAY: string;
  LIGHT_GRAY_2: string;
  GRAY: string;
  DARK_GRAY: string;
  DARK_GRAY_2: string;
  WHITE: string;
};

type FontSizesProps = {
  TEXT_PERIODE_SIZE: number;
  TEXT_NAME_CATEGORY: number;
  TEXT_NAME_ALBUM: number;
  LABEL_TAB_SIZE: number;
  PLACEHOLDER_SEARCH_SIZE: number;
  TEXT_BUTTON_SEARCH: number;
  TEXT_SEARCH_INFO: number;
  TEXT_SEARCH_INFO_2: number;
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
