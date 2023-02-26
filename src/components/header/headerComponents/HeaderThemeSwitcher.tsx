import { FC, useContext, useState } from 'react';
import { styled, Switch } from '@mui/material';
import { darkThemeIcon, lightThemeIcon } from '../../../constants/themeSwitcherIcons';
import { ColorModeContext } from '../../AppThemeProvider';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { useAppDispatch } from '../../../store/store';
import { updateTheme } from '../../../store/slices/authSlice/authSlice';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 56,
  height: 30,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 3,
    padding: 0,
    transform: 'translateX(2px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(24px)',
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
    backgroundColor: theme.palette.mode === 'dark' ? '#275459' : '#121212',
    width: 24,
    height: 24,
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
  const { theme } = useAppSelector(selectAuth);
  const [checked, setChecked] = useState(theme === 'light' ? false : true);
  const { toggleColorMode } = useContext(ColorModeContext);
  const dispatch = useAppDispatch();

  const handleThemeToggle = (): void => {
    toggleColorMode();
    setChecked(!checked);
    const updatedTheme = theme === 'light' ? 'dark' : 'light';

    dispatch(updateTheme(updatedTheme));
  };

  return <MaterialUISwitch checked={checked} onClick={handleThemeToggle} />;
};

export { HeaderThemeSwitcher };
