import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { selectItems, useAppSelector } from '../../store/selectors';
import { LastAddedItem } from './LastAddedItem';
import { NoContent } from '../UI/NoContent';
import { lastAddedItemsListStyles } from '../../constants/componentsStyles';
import { MAX_ITEMS_LIST_LENGTH, MIN_LIST_LENGTH } from '../../constants/commonConstants';
import { useTranslation } from 'react-i18next';

const LastAddedItemsList: FC = () => {
  const { items } = useAppSelector(selectItems);
  const { t } = useTranslation();

  return (
    <Stack sx={{ flex: '1 1 30%' }}>
      <Typography sx={{ fontSize: 18, textAlign: 'center' }}>
        {t('notifications.lastAddedItems')}
      </Typography>
      <Stack sx={lastAddedItemsListStyles}>
        {items.length ? (
          [...items]
            .reverse()
            .slice(MIN_LIST_LENGTH, MAX_ITEMS_LIST_LENGTH)
            .map((item, index) => <LastAddedItem key={index} item={item} />)
        ) : (
          <NoContent text={t('notifications.lastAddedItemsNoContent')} size={16} />
        )}
      </Stack>
    </Stack>
  );
};

export { LastAddedItemsList };
