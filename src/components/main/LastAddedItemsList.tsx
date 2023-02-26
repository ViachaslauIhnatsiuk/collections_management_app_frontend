import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { selectItems, useAppSelector } from '../../store/selectors';
import { LastAddedItem } from './LastAddedItem';
import { NoContent } from '../UI/NoContent';

const LastAddedItemsList: FC = () => {
  const { items } = useAppSelector(selectItems);

  return (
    <Stack sx={{ flex: '1 1 40%' }}>
      <Typography sx={{ fontSize: 18, textAlign: 'center' }}>LAST ADDED ITEMS</Typography>
      <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 1 }}>
        {items.length ? (
          [...items]
            .reverse()
            .slice(0, 5)
            .map((item, index) => <LastAddedItem key={index} item={item} />)
        ) : (
          <NoContent text="LAST ADDED ITEMS" size={16} />
        )}
      </Stack>
    </Stack>
  );
};

export { LastAddedItemsList };
