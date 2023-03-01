import { FC, useContext, useState } from 'react';
import { MaterialUISwitch } from '../../../constants/componentsStyles';
import { ColorModeContext } from '../../AppThemeProvider';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { useAppDispatch } from '../../../store/store';
import { updateTheme } from '../../../store/slices/authSlice/authSlice';

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
