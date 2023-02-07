import { FC, MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../../store/store';
import { createItem, updateItem } from '../../../store/slices/itemSlice/itemSlice';
import { selectUser, useAppSelector } from '../../../store/selectors';
import { ItemFormButtonProps } from '../../../models/itemFormProps';
import { IItem } from '../../../store/slices/itemSlice/itemModel';

const ItemFormButton: FC<ItemFormButtonProps> = (props) => {
  const { value, itemId, collectionId, extraFields, setOpen } = props;
  const {
    getValues,
    reset,
    formState: { isValid },
  } = useFormContext();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(selectUser);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const fieldsValues = getValues(['title', 'tags', ...extraFields]);

    if (value === 'Create item') {
      const newItem: IItem = {
        title: fieldsValues[0],
        tags: [fieldsValues[1]],
        collectionId: collectionId,
        ownerId: currentUser.id,
        comments: [],
      };

      for (let i = 2; i < fieldsValues.length; i++) {
        newItem[extraFields[i - 2]] = fieldsValues[i];
      }

      dispatch(createItem([newItem, collectionId]));
    } else {
      const newItem: IItem = {
        title: fieldsValues[0],
        tags: [fieldsValues[1]],
      };

      for (let i = 2; i < fieldsValues.length; i++) {
        newItem[extraFields[i - 2]] = fieldsValues[i];
      }

      dispatch(updateItem([newItem, collectionId, itemId as string]));
    }

    reset();
    setOpen(false);
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