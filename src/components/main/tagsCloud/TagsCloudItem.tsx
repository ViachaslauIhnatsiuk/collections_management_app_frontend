import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import { IItem } from '../../../store/slices/itemSlice/itemModel';

const TagsCloudItem: FC<{ item: IItem }> = ({ item }) => {
  return (
    <Link
      to={`/all-collections/${item.collectionId}/items/${item._id}`}
      style={{ textDecoration: 'none' }}
    >
      <Paper sx={{ px: 1, color: 'text.primary' }}>{item.title}</Paper>
    </Link>
  );
};

export { TagsCloudItem };
