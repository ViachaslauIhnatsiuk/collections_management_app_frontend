import { FC } from 'react';
import { Container } from '@mui/material';
import { LastAddedItemsList } from '../main/LastAddedItemsList';

const MainPage: FC = () => {
  return (
    <Container maxWidth="md" sx={{ pt: 3 }}>
      <LastAddedItemsList />
    </Container>
  );
};

export { MainPage };
