import { FC } from 'react';
import { Stack } from '@mui/material';
import { IItem } from '../../../store/slices/itemSlice/itemModel';
import { TagsCloudItem } from './TagsCloudItem';

const TagsCloudList: FC<{ itemsList: IItem[] }> = ({ itemsList }) => {
  return (
    <Stack sx={{ width: '100%', maxHeight: 300, gap: 0.5, p: 0.5, overflow: 'auto' }}>
      {itemsList.map((item, index) => {
        return <TagsCloudItem key={index} item={item} />;
      })}
    </Stack>
  );
};

export { TagsCloudList };
