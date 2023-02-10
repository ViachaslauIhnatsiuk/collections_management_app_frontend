import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { selectItems, useAppSelector } from '../../store/selectors';
import { customScrollbarStyles } from '../../constants/componentsStyles';
import { LastAddedItem } from './LastAddedItem';

const LastAddedItemsList: FC = () => {
  const { items } = useAppSelector(selectItems);

  return (
    <>
      <Typography variant="h6">Last added items</Typography>
      <Stack
        sx={{
          width: '100%',
          maxHeight: '250px',
          overflow: 'auto',
          p: 0.5,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          ...customScrollbarStyles,
        }}
      >
        {items.length
          ? [...items]
              .reverse()
              .slice(0, 5)
              .map((item, index) => <LastAddedItem key={index} item={item} />)
          : 'No added items yet'}
      </Stack>
    </>
  );
};

export { LastAddedItemsList };
