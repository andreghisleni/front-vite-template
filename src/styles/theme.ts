import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#A8CE43',
    text: '#312e38',
    bg: '#F7F8FC',
    table: {
      bg: '#fff',
      border: '#DFE0EB',
      text: '#252733',
      hover: '#F7F8FC',
      subText: '#9FA2B4',
      header: {
        svg: '#9FA2B4',
      },
    },
    scrollbar: {
      thumb: '#9FA2B4',
      track: '#F7F8FC',
    },
    input: {
      placeholder: '#B7B7CC',
      text: '#6C6C80',
      bg: '#FFFFFF',
      border: '#BEBEBE',
      progress: {
        green: '#6FCE43',
        yellow: '#FFD600',
        red: '#FF0707',
        orange: '#FF7A00',
      },
    },
  },
};
