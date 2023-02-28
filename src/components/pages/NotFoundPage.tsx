import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: 60 }}>404</Typography>
      <Typography sx={{ fontSize: 40 }}>{t('notFoundPage')}</Typography>
    </Container>
  );
};

export { NotFoundPage };
