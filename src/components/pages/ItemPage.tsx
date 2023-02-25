import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { useItems } from '../../hooks/useItems';
import { Loader } from '../UI/Loader';
import { ItemCard } from '../items/itemCard/ItemCard';
import { BackButton } from '../UI/BackButton';

const ItemPage: FC = () => {
  const { getItemById, status, error } = useItems();
  const { id } = useParams();

  const itemToRender = getItemById(id as string);

  return (
    <>
      <Loader status={status} error={error} />
      {status !== 'loading' && !error && (
        <Container maxWidth="md" sx={{ py: 5 }}>
          <BackButton />
          <ItemCard item={itemToRender} />
        </Container>
      )}
    </>
  );
};

export { ItemPage };
