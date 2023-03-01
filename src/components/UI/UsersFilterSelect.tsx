import { FC } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { selectUsers, useAppSelector } from '../../store/selectors';
import { useTranslation } from 'react-i18next';
import { UsersFilterSelectProps } from '../../models/componentsProps';

const UsersFilterSelect: FC<UsersFilterSelectProps> = ({ filterUser, setFilterUser }) => {
  const { users } = useAppSelector(selectUsers);
  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent): void => {
    setFilterUser?.(event.target.value);
  };

  return (
    <FormControl
      size="small"
      style={{ maxHeight: 31, width: 150, alignSelf: 'flex-end' }}
    >
      <InputLabel>{t('userPage.selectLabel')}</InputLabel>
      <Select
        sx={{ maxHeight: 31 }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 250,
            },
          },
        }}
        value={filterUser}
        label={t('userPage.selectLabel')}
        onChange={handleChange}
      >
        <MenuItem sx={{ maxHeight: 28 }} value="All">
          All
        </MenuItem>
        {users.map((user, index) => (
          <MenuItem sx={{ maxHeight: 28 }} key={index} value={user._id}>
            {user.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { UsersFilterSelect };
