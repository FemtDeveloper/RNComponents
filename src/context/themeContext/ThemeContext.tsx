import React, {createContext, useReducer, useEffect} from 'react';
import {useColorScheme, AppState, Appearance} from 'react-native';
import {ThemeState, darkTheme, lightTheme, themeReducer} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setLightTheme: () => void;
  setDarkTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    AppState.addEventListener('change', () => {
      Appearance.getColorScheme() === 'light'
        ? setLightTheme()
        : setDarkTheme();
    });
  }, []);

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('light theme set');
  };
  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('darkThem');
  };

  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
