import { FC } from 'react';
import { Container } from '@mui/material';

const CollectionPage: FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'grid',
        placeContent: 'center',
        py: 5,
      }}
    >
      Items
    </Container>
  );
};

export { CollectionPage };
