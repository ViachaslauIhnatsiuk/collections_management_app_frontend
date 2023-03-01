import { FC, useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { useAppDispatch } from '../../../store/store';
import { changeLanguage } from '../../../store/slices/authSlice/authSlice';
import { useTranslation } from 'react-i18next';
import { LanguageType } from '../../../store/slices/authSlice/authModel';

const HeaderLocalization: FC = () => {
  const { language } = useAppSelector(selectAuth);
  const [localization, setLocalization] = useState<LanguageType>(language);
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const switchLanguage = (language: LanguageType): void => {
    i18n.changeLanguage(language);
    setLocalization(language);
    dispatch(changeLanguage(language));
  };

  return (
    <ToggleButtonGroup
      sx={{ maxHeight: 31 }}
      exclusive
      value={localization}
      onChange={(_, language) => switchLanguage(language)}
    >
      <ToggleButton sx={{ color: '#ffffff' }} value="en">
        EN
      </ToggleButton>
      <ToggleButton sx={{ color: '#ffffff' }} value="ru">
        RU
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export { HeaderLocalization };
