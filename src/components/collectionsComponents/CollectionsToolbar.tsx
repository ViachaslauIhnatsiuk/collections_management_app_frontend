import { FC } from 'react';
import { Toolbar } from '@mui/material';
import { AddCollectionButton } from './AddCollectionsButton';
import { CollectionsFilterbar } from './CollectionsFilterBar';
import { CollectionsFilterBarProps } from '../../models/componentsProps';

const CollectionsToolbar: FC<CollectionsFilterBarProps> = ({ setState }) => {
  return (
    <Toolbar sx={{ gap: 2 }}>
      <CollectionsFilterbar setState={setState} />
      <AddCollectionButton />
    </Toolbar>
  );
};

export { CollectionsToolbar };
