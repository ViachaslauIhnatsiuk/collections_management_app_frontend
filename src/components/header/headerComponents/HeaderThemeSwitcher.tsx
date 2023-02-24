import { FC, useContext } from 'react';
import { styled, Switch } from '@mui/material';
import { darkThemeIcon, lightThemeIcon } from '../../../constants/themeSwitcherIcons';
import { ColorModeContext } from '../../AppThemeProvider';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 58,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 4,
    padding: 0,
    transform: 'translateX(2px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('${darkThemeIcon}')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 26,
    height: 26,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('${lightThemeIcon}')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 10,
  },
}));

const HeaderThemeSwitcher: FC = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  return <MaterialUISwitch onClick={toggleColorMode} />;
};

export { HeaderThemeSwitcher };
