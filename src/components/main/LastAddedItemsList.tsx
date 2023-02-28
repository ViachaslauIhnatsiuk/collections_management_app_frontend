import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { selectItems, useAppSelector } from '../../store/selectors';
import { LastAddedItem } from './LastAddedItem';
import { NoContent } from '../UI/NoContent';
import { useTranslation } from 'react-i18next';

const LastAddedItemsList: FC = () => {
  const { items } = useAppSelector(selectItems);
  const { t } = useTranslation();

  return (
    <Stack sx={{ flex: '1 1 30%' }}>
      <Typography sx={{ fontSize: 18, textAlign: 'center' }}>
        {t('notifications.lastAddedItems')}
      </Typography>
      <Stack
        sx={{
          maxHeight: 300,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          px: 1,
          py: 0.2,
          overflow: 'auto',
        }}
      >
        {items.length ? (
          [...items]
            .reverse()
            .slice(0, 15)
            .map((item, index) => <LastAddedItem key={index} item={item} />)
        ) : (
          <NoContent text={t('notifications.lastAddedItemsNoContent')} size={16} />
        )}
      </Stack>
    </Stack>
  );
};

export { LastAddedItemsList };
