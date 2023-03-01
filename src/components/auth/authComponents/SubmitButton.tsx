import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { SubmitButtonProps } from '../../../models/componentsProps';
import { useAppDispatch } from '../../../store/store';
import { signIn, signUp } from '../../../store/slices/authSlice/authSlice';
import { IUserForm } from '../../../models/componentsModels';

const SubmitButton: FC<SubmitButtonProps> = ({ type, value }) => {
  const {
    getValues,
    reset,
    formState: { isValid },
  } = useFormContext<IUserForm>();
  const dispatch = useAppDispatch();

  const handleSubmit = (): void => {
    const [name, email, password] = getValues(['name', 'email', 'password']);

    if (type === 'Sign Up') {
      const signUpData = { name, email, password };
      dispatch(signUp(signUpData));
    } else {
      const signInData = { email, password };
      dispatch(signIn(signInData));
    }

    reset();
  };

  return (
    <Button variant="contained" fullWidth disabled={!isValid} onClick={handleSubmit}>
      {value}
    </Button>
  );
};

export { SubmitButton };
