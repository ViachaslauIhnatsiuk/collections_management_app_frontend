import { FC, useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { useAppDispatch } from '../../../store/store';
import { changeLanguage } from '../../../store/slices/authSlice/authSlice';
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
    <ButtonGroup size="small">
      <Button
        sx={{ color: '#ffffff' }}
        variant={localization === 'en' ? 'contained' : 'text'}
        onClick={() => switchLanguage('en')}
      >
        EN
      </Button>
      <Button
        sx={{ color: '#ffffff' }}
        variant={localization === 'ru' ? 'contained' : 'text'}
        onClick={() => switchLanguage('ru')}
      >
        RU
      </Button>
    </ButtonGroup>
  );
};

export { HeaderLocalization };
