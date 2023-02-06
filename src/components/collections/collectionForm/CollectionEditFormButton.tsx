import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../../store/store';
import { updateCollection } from '../../../store/slices/collectionSlice/collectionSlice';
import { CollectionEditFormButtonProps } from '../../../models/collectionFormProps';
import { ICollectionForm } from '../../../models/componentsModels';

const CollectionEditFormButton: FC<CollectionEditFormButtonProps> = (props) => {
  const { id, value, setOpen } = props;
  const {
    getValues,
    reset,
    formState: { isValid },
  } = useFormContext<ICollectionForm>();
  const dispatch = useAppDispatch();

  const handleSubmit = (): void => {
    const fieldsValues = getValues(['title', 'description', 'topic']);

    const updatedCollectionData = {
      title: fieldsValues[0],
      description: fieldsValues[1],
      topic: fieldsValues[2],
    };

    dispatch(updateCollection([updatedCollectionData, id]));

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

export { CollectionEditFormButton };
