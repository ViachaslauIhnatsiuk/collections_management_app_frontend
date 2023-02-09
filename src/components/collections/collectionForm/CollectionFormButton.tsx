import { FC, MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../../store/store';
import {
  createCollection,
  updateCollection,
} from '../../../store/slices/collectionSlice/collectionSlice';
import { selectUser, useAppSelector } from '../../../store/selectors';
import { extraFieldsInitialState } from '../../../constants/initialFieldsValues';
import { CollectionFormButtonProps } from '../../../models/collectionFormProps';
import { ICollectionForm } from '../../../models/componentsModels';

const CollectionFormButton: FC<CollectionFormButtonProps> = (props) => {
  const { id, value, extraFields, imageUrl, setExtraFields } = props;
  const {
    getValues,
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

    if (value === 'Create collection') {
      const newCollectionData = {
        title: fieldsValues[0],
        description: fieldsValues[1],
        topic: fieldsValues[2],
        imageUrl,
        ownerId: currentUser.id,
        itemExtraFields,
      };

      dispatch(createCollection(newCollectionData));
    } else {
      const updatedCollectionData = {
        title: fieldsValues[0],
        description: fieldsValues[1],
        topic: fieldsValues[2],
        imageUrl,
      };

      dispatch(updateCollection([updatedCollectionData, id as string]));
    }

    setExtraFields(extraFieldsInitialState);
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

export { CollectionFormButton };
