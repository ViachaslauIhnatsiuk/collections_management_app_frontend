import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { IFormUser } from '../../../models/formUser';
import { SubmitButtonProps } from '../../../models/componentsProps';

const SubmitButton: FC<SubmitButtonProps> = ({ value, submitHandler }) => {
  const {
    getValues,
    reset,
    formState: { isValid },
  } = useFormContext<IFormUser>();

  const handleSubmit = (): void => {
    const fieldsValues = getValues(['name', 'email', 'password']);
    if (submitHandler.length === 3) {
      submitHandler(...fieldsValues);
    } else {
      submitHandler(...(fieldsValues.slice(1) as [string, string]));
    }
    reset();
  };

  return (
    <Button
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

export { SubmitButton };
