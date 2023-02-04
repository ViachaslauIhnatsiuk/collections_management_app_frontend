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
      size="small"
      color="primary"
      label={`${name} (${type[0]})`}
      onDelete={deleteField}
    />
  );
};

export { ExtraFieldChip };
