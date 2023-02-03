import { FC } from 'react';
import { Toolbar } from '@mui/material';
import { CollectionAddButton } from './CollectionAddButton';
import { CollectionsFilterbar } from './CollectionsFilterbar';
import { CollectionsFilterBarProps } from '../../models/componentsProps';

const CollectionsToolbar: FC<CollectionsFilterBarProps> = ({ setState }) => {
  return (
    <Toolbar sx={{ gap: 2 }}>
      <CollectionsFilterbar setState={setState} />
      <CollectionAddButton />
    </Toolbar>
  );
};

export { CollectionsToolbar };
