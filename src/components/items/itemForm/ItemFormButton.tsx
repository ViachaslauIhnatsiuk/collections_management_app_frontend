import { FC, MouseEvent, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../../store/store';
import { createItem, updateItem } from '../../../store/slices/itemSlice/itemSlice';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { ItemFormButtonProps } from '../../../models/itemFormProps';
import { IItemCreate, IItemUpdate } from '../../../store/slices/itemSlice/itemModel';

const ItemFormButton: FC<ItemFormButtonProps> = (props) => {
  const { value, itemId, collectionId, extraFields } = props;
  const {
    getValues,
    formState: { isValid },
  } = useFormContext();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(selectAuth);

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
        collectionId: collectionId,
        ownerId: currentUser.id,
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
  };

  return (
    <Button
      sx={{ mt: 2 }}
      variant="contained"
      color="success"
      type="submit"
      fullWidth
      disabled={!isValid}
      onClick={handleSubmit}
    >
      {value}
    </Button>
  );
};

export { ItemFormButton };
