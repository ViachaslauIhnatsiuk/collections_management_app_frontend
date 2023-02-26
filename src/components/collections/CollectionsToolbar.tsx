import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { FilterBar } from '../UI/FilterBar';
import { SortButton } from '../UI/SortButton';
import { CollectionAddButton } from '../collections/CollectionAddButton';
import { CollectionsToolbarProps } from '../../models/componentsProps';

const CollectionsToolbar: FC<CollectionsToolbarProps> = (props) => {
  const { sortType, setSortType, setFilteredCollections } = props;
  const { pathname } = useLocation();

  return (
    <Toolbar disableGutters sx={{ gap: 1, flexWrap: 'wrap' }}>
      <FilterBar setFiltered={setFilteredCollections} />
      <SortButton sortType={sortType} setSortType={setSortType} />
      {pathname.includes('user-collections') && <CollectionAddButton />}
    </Toolbar>
  );
};

export { CollectionsToolbar };
