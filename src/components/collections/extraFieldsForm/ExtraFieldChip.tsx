import { FC } from 'react';
import { Chip } from '@mui/material';
import { ExtraFieldChipProps } from '../../../models/itemExtraFieldsProps';

const ExtraFieldChip: FC<ExtraFieldChipProps> = ({
  name,
  type,
  extraFields,
  setExtraFields,
}) => {
  const deleteField = (): void => {
    const updatedExtraFields = extraFields.filter((field) => field.name !== name);
    setExtraFields(updatedExtraFields);
  };

  return (
    <Chip
      sx={{ borderRadius: '3px' }}
      size="small"
      color="info"
      label={`${name} (${type[0]})`}
      onDelete={deleteField}
    />
  );
};

export { ExtraFieldChip };
