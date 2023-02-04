import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import {
  CollectionCreationFormButtonProps,
  ICollectionForm,
} from '../../../models/collectionForm';
import { useAppDispatch } from '../../../store/store';
import { createCollection } from '../../../store/slices/collectionSlice/collectionSlice';
import { selectUser, useAppSelector } from '../../../store/selectors';

const CollectionCreationFormButton: FC<CollectionCreationFormButtonProps> = (props) => {
  const { value, extraFields, setExtraFields, setOpen } = props;
  const {
    getValues,
    reset,
    formState: { isValid },
  } = useFormContext<ICollectionForm>();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(selectUser);

  const handleSubmit = (): void => {
    const fieldsValues = getValues(['title', 'description', 'topic']);

    const newCollectionData = {
      title: fieldsValues[0],
      description: fieldsValues[1],
      topic: fieldsValues[2],
      ownerId: currentUser.id,
      itemExtraFields: extraFields,
    };

    dispatch(createCollection(newCollectionData));

    reset();
    setExtraFields([]);
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

export { CollectionCreationFormButton };
