import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { ItemCreationFormButtonProps } from '../../../models/itemFormProps';

const ItemCreationFormButton: FC<ItemCreationFormButtonProps> = (props) => {
  const { value, extraFields, setOpen } = props;
  const {
    getValues,
    reset,
    formState: { isValid },
  } = useFormContext();

  const handleSubmit = (): void => {
    const fieldsValues = getValues(['title', 'tags', ...extraFields]);

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

export { ItemCreationFormButton };
