import { FC } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { CollectionExtraFieldsProps } from '../../../../models/collectionFormProps';
import { collectionExtraFieldsTypes } from '../../../../constants/renderLists';
import { useTranslation } from 'react-i18next';

const CollectionExtraFieldsSelect: FC<CollectionExtraFieldsProps> = (props) => {
  const { newExtraField, setNewExtraField } = props;
  const { t } = useTranslation();

  const handleChange = (e: SelectChangeEvent) => {
    setNewExtraField({ ...newExtraField, type: e.target.value });
  };

  return (
    <FormControl size="small" fullWidth style={{ maxWidth: 120 }}>
      <InputLabel>{t('collectionForm.dataTypeSelect')}</InputLabel>
      <Select
        value={newExtraField.type}
        label={t('collectionForm.dataTypeSelect')}
        onChange={handleChange}
      >
        {collectionExtraFieldsTypes.map((type, index) => (
          <MenuItem key={index} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { CollectionExtraFieldsSelect };
