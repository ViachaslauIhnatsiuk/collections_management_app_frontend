import { FC } from 'react';
import { Box } from '@mui/material';
import { selectAuth, useAppSelector } from '../../store/selectors';

const NoContent: FC<{ text: string; size: number }> = ({ text, size }) => {
  const { language } = useAppSelector(selectAuth);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        placeContent: 'center',
        pt: 2,
        textAlign: 'center',
        fontSize: size,
        fontWeight: 500,
        color: 'text.secondary',
      }}
    >
      {language === 'en' ? `THERE ARE NO ${text} YET` : `${text} ПОКА НЕТ`}
    </Box>
  );
};

export { NoContent };
