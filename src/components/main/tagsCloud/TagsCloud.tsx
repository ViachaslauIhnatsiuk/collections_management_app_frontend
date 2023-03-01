import { FC, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Stack } from '@mui/material';
import { TagCloud } from 'react-tagcloud';
import { TagsCloudList } from './TagsCloudList';
import { selectItems, useAppSelector } from '../../../store/selectors';
import { useItems } from '../../../hooks/useItems';
import { ICloudTag } from '../../../models/componentsModels';
import { IItem } from '../../../store/slices/itemSlice/itemModel';
import { useTranslation } from 'react-i18next';

const TagsCloud: FC = () => {
  const [itemsList, setItemsList] = useState<IItem[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const { items } = useAppSelector(selectItems);
  const { getCloudTagsFromItems } = useItems();
  const { t } = useTranslation();

  const handleTagClick = (tag: ICloudTag): void => {
    const filteredItems = items.filter((item) => item.tags.includes(tag.value));

    setItemsList(filteredItems);
    setOpen(true);
  };

  return (
    <Stack sx={{ maxWidth: 600, alignSelf: 'center' }}>
      <TagCloud
        minSize={20}
        maxSize={40}
        tags={getCloudTagsFromItems()}
        shuffle={false}
        disableRandomColor={true}
        colorOptions={{ luminosity: 'random', hue: '#275459' }}
        onClick={handleTagClick}
      />
      <Dialog
        transitionDuration={400}
        open={open}
        keepMounted
        onClose={() => setOpen(false)}
        sx={{ '& .MuiDialog-paper': { m: 1 } }}
      >
        <DialogTitle sx={{ pb: 1, textAlign: 'center' }}>
          {t('items.tagsModal')}
        </DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <TagsCloudList itemsList={itemsList} />
        </DialogContent>
      </Dialog>
    </Stack>
  );
};

export { TagsCloud };
