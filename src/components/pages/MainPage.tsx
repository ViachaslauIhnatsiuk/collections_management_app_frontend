import { Container } from '@mui/material';
import { FC } from 'react';
import { CollectionsPage } from './CollectionsPage';

const MainPage: FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'grid',
        placeContent: 'center',
        py: 5,
      }}
    >
      <CollectionsPage />
    </Container>
  );
};

export { MainPage };
