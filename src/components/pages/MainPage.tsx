import { FC, useEffect } from 'react';
import { selectCollections, useAppSelector } from '../../store/selectors';
import { fetchCollections } from '../../store/slices/collectionSlice/collectionSlice';
import { useAppDispatch } from '../../store/store';

const MainPage: FC = () => {
  const { collections } = useAppSelector(selectCollections);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return <div>MainPage</div>;
};

export { MainPage };
