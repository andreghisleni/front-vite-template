import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: string;
      bg: string;

      table: {
        bg: string;
        border: string;
        text: string;
        hover: string;
        subText: string;
        header: {
          svg: string;
        };
      };
      scrollbar: {
        thumb: string;
        track: string;
      };
      input: {
        placeholder: string;
        text: string;
        bg: string;
        border: string;

        progress: {
          green: string;
          yellow: string;
          red: string;
          orange: string;
        };
      };
    };
  }
}
