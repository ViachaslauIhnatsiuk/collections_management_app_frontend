import { createContext, FC, ReactNode, useMemo, useState } from 'react';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { themePalette } from '../constants/themePalette';
import { selectAuth, useAppSelector } from '../store/selectors';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const AppThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useAppSelector(selectAuth);
  const [mode, setMode] = useState<PaletteMode>(theme);

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...themePalette,
    },
    typography: {
      fontFamily: "'Urbanist', sans-serif",
    },
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const providerTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={providerTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { AppThemeProvider, ColorModeContext };
