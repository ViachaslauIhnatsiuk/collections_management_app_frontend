import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@mui/material';
import { SubmitButtonProps } from '../../../models/componentsProps';
import { useAppDispatch } from '../../../store/store';
import { signIn, signUp } from '../../../store/slices/userSlice/userSlice';
import { IUserForm } from '../../../models/componentsModels';

const SubmitButton: FC<SubmitButtonProps> = ({ value }) => {
  const {
    getValues,
    reset,
    formState: { isValid },
  } = useFormContext<IUserForm>();
  const dispatch = useAppDispatch();

  const handleSubmit = (): void => {
    const fieldsValues = getValues(['name', 'email', 'password']);

    if (value === 'Sign Up') {
      const signUpData = {
        name: fieldsValues[0],
        email: fieldsValues[1],
        password: fieldsValues[2],
      };

      dispatch(signUp(signUpData));
    } else {
      const signInData = {
        email: fieldsValues[1],
        password: fieldsValues[2],
      };

      dispatch(signIn(signInData));
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
