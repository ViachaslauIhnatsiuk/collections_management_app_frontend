import { FC, useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { CollectionSelectProps } from '../../../models/collectionFormProps';
import { useFormContext } from 'react-hook-form';
import { CollectionFormType, ICollectionForm } from '../../../models/componentsModels';
import { selectUsers, useAppSelector } from '../../../store/selectors';

const CollectionUserSelect: FC<CollectionSelectProps> = ({ type, value }) => {
  const [user, setUser] = useState<string>(value);
  const { register } = useFormContext<ICollectionForm>();
  const { users } = useAppSelector(selectUsers);

  const handleChange = (event: SelectChangeEvent): void => {
    setUser(event.target.value);
  };

  return (
    <FormControl size="small" fullWidth style={{ alignSelf: 'flex-end' }}>
      <InputLabel>user</InputLabel>
      <Select
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 250,
            },
          },
        }}
        value={user}
        label="user"
        {...register(type as CollectionFormType, {
          required: true,
        })}
        onChange={handleChange}
      >
        {users.map((user, index) => (
          <MenuItem key={index} value={user._id}>
            {user.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { CollectionUserSelect };
