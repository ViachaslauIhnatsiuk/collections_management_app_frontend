import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { passwordRegister } from '../../../constants/formValidation';
import { IUserForm } from '../../../models/componentsModels';

const PasswordField: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
  } = useFormContext<IUserForm>();

  return (
    <>
      <FormControl variant="outlined" required fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          {...register('password', passwordRegister)}
        />
      </FormControl>
      <Typography
        sx={{ fontSize: 11, alignSelf: 'flex-start', pl: 1, color: 'secondary.main' }}
      >
        {errors.password?.message}
      </Typography>
    </>
  );
};

export { PasswordField };
