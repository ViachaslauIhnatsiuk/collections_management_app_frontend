import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { selectItems, useAppSelector } from '../../store/selectors';
import { Loader } from '../UI/Loader';
import { ItemCard } from '../items/itemCard/ItemCard';
import { IItem } from '../../store/slices/itemSlice/itemModel';

const ItemPage: FC = () => {
  const { items, status, error } = useAppSelector(selectItems);
  const { id } = useParams();

  const itemToRender = items.find((item) => item._id === id) as IItem;

  return (
    <>
      <Loader status={status} error={error} />
      {status !== 'loading' && !error && (
        <Container
          maxWidth="md"
          sx={{
            display: 'grid',
            placeContent: 'center',
            py: 5,
          }}
        >
          <ItemCard item={itemToRender} />
        </Container>
      )}
    </>
  );
};

export { ItemPage };
