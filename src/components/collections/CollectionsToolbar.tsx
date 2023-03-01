import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { FilterBar } from '../UI/FilterBar';
import { SortButton } from '../UI/SortButton';
import { CollectionAddButton } from '../collections/CollectionAddButton';
import { CollectionsToolbarProps } from '../../models/componentsProps';
import { UsersFilterSelect } from '../UI/UsersFilterSelect';
import { selectAuth, useAppSelector } from '../../store/selectors';

const CollectionsToolbar: FC<CollectionsToolbarProps> = (props) => {
  const { sortType, filterUser, setFilterUser, setSortType, setFilteredCollections } =
    props;
  const { currentUser } = useAppSelector(selectAuth);
  const { pathname } = useLocation();

  return (
    <Toolbar disableGutters sx={{ gap: 1, flexWrap: 'wrap', alignItems: 'flex-end' }}>
      <FilterBar setFiltered={setFilteredCollections} />
      {pathname.includes('user-collections') && currentUser.isAdmin && (
        <UsersFilterSelect filterUser={filterUser} setFilterUser={setFilterUser} />
      )}
      <SortButton sortType={sortType} setSortType={setSortType} />
      {pathname.includes('user-collections') && <CollectionAddButton />}
    </Toolbar>
  );
};

export { CollectionsToolbar };
