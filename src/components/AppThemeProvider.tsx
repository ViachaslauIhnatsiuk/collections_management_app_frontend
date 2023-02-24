import { createContext, FC, ReactNode, useMemo, useState } from 'react';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { themePalette } from '../constants/themePalette';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const AppThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...themePalette,
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

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { AppThemeProvider, ColorModeContext };
