import { FC, MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../../store/store';
import { createCollection } from '../../../store/slices/collectionSlice/collectionSlice';
import { selectUser, useAppSelector } from '../../../store/selectors';
import { CollectionCreationFormButtonProps } from '../../../models/collectionFormProps';
import { ICollectionForm } from '../../../models/componentsModels';

const CollectionCreationFormButton: FC<CollectionCreationFormButtonProps> = (props) => {
  const { extraFields, imageUrl, setExtraFields, setOpen } = props;
  const {
    getValues,
    reset,
    formState: { isValid },
  } = useFormContext<ICollectionForm>();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector(selectUser);

  const itemExtraFields = extraFields
    .filter(({ name }) => name)
    .map(({ name, type }) => ({ name, type }));

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const fieldsValues = getValues(['title', 'description', 'topic']);

    const newCollectionData = {
      title: fieldsValues[0],
      description: fieldsValues[1],
      topic: fieldsValues[2],
      imageUrl,
      ownerId: currentUser.id,
      itemExtraFields,
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
      Create collection
    </Button>
  );
};

export { CollectionCreationFormButton };
