import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { IFormUser } from '../../../models/formUser';
import { SubmitButtonProps } from '../../../models/componentsProps';

const AuthSubmitButton: FC<SubmitButtonProps> = ({ handler }) => {
  const navigate = useNavigate();
  const {
    getValues,
    reset,
    formState: { isValid },
  } = useFormContext<IFormUser>();

  const handleSubmit = async (): Promise<void> => {
    await handler(...getValues(['email', 'password'])).catch();
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

export { AuthSubmitButton };
