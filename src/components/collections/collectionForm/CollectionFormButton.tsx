import { FC, MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../../store/store';
import {
  createCollection,
  updateCollection,
} from '../../../store/slices/collectionSlice/collectionSlice';
import { selectAuth, useAppSelector } from '../../../store/selectors';
import { CollectionFormButtonProps } from '../../../models/collectionFormProps';
import { ICollectionForm } from '../../../models/componentsModels';

const CollectionFormButton: FC<CollectionFormButtonProps> = (props) => {
  const { id, type, value, extraFields, imageUrl, setExtraFields } = props;
  const {
    getValues,
    formState: { isValid },
  } = useFormContext<ICollectionForm>();
  const { currentUser } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const itemExtraFields = extraFields.map(({ name, type }) => ({ name, type }));

    const [title, description, topic, user] = getValues([
      'title',
      'description',
      'topic',
      'user',
    ]);

    if (type === 'create') {
      const newCollectionData = {
        title,
        description,
        topic,
        imageUrl,
        ownerId: user || currentUser._id,
        itemExtraFields,
      };

      dispatch(createCollection(newCollectionData));
    } else {
      const updatedCollectionData = {
        title,
        description,
        topic,
        imageUrl,
      };

      dispatch(updateCollection([updatedCollectionData, id as string]));
    }

    setExtraFields([]);
  };

  return (
    <Button
      sx={{ mt: 2 }}
      variant="contained"
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
