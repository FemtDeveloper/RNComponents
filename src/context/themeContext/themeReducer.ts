import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currenTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currenTheme: 'light',
  dark: false,
  dividerColor: '#fff000',
  colors: {
    primary: 'red',
    background: 'white',
    card: 'beige',
    text: 'purple',
    border: 'cyan',
    notification: 'blue',
  },
};
export const darkTheme: ThemeState = {
  currenTheme: 'dark',
  dark: true,
  dividerColor: '#fff000',
  colors: {
    primary: 'red',
    background: 'black',
    card: 'black',
    text: 'green',
    border: 'black',
    notification: 'blue',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};
    case 'set_dark_theme':
      return {...darkTheme};

    default:
      return state;
  }
};
