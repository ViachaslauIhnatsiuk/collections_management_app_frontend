import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { IFormUser } from '../../../models/formUser';
import { SubmitButtonProps } from '../../../models/componentsProps';

const SubmitButton: FC<SubmitButtonProps> = ({ submitHandler }) => {
  const navigate = useNavigate();
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
    navigate('/');
  };

  return (
    <Button
      variant="contained"
      type="submit"
      fullWidth
      disabled={!isValid}
      onClick={handleSubmit}
    >
      Sign In
    </Button>
  );
};

export { SubmitButton };
