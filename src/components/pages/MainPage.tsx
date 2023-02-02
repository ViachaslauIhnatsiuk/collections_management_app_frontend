import { Container } from '@mui/material';
import { FC } from 'react';

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
      Main page
    </Container>
  );
};

export { MainPage };
