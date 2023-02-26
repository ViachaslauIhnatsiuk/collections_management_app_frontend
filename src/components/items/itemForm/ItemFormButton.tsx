import { FC, MouseEvent, useMemo } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../../store/store';
import { createItem, updateItem } from '../../../store/slices/itemSlice/itemSlice';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { ItemFormButtonProps } from '../../../models/itemFormProps';
import { IItemCreate, IItemUpdate } from '../../../store/slices/itemSlice/itemModel';
import { useCollections } from '../../../hooks/useCollections';

const ItemFormButton: FC<ItemFormButtonProps> = (props) => {
  const { value, itemId, collectionId, extraFields, setOpen } = props;
  const { getValues } = useFormContext<FieldValues>();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(selectAuth);
  const { getCollectionById } = useCollections();

  const collection = getCollectionById(collectionId);

  const names = useMemo(() => {
    return extraFields.map((field) => field.name.toLowerCase()) as string[];
  }, [extraFields]);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const [title, tags, ...fieldsNames] = getValues(['title', 'tags', ...names]);

    if (value === 'Create item') {
      const newItem: IItemCreate = {
        title,
        tags,
        collectionId: collection.ownerId,
        ownerId: currentUser._id,
        likes: [],
        comments: [],
      };

      for (let i = 0; i < fieldsNames.length; i++) {
        newItem[names[i]] = fieldsNames[i];
      }

      dispatch(createItem([newItem, collectionId]));
    } else {
      const newItem: IItemUpdate = {
        title: fieldsNames[0],
        tags: [fieldsNames[1]],
      };

      for (let i = 0; i < fieldsNames.length; i++) {
        newItem[names[i]] = fieldsNames[i];
      }

      dispatch(updateItem([newItem, collectionId, itemId as string]));
    }

    setOpen(false);
  };

  return (
    <Button
      sx={{ mt: 2 }}
      variant="contained"
      type="submit"
      fullWidth
      onClick={handleSubmit}
    >
      {value}
    </Button>
  );
};

export { ItemFormButton };
