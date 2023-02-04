import { FC } from 'react';
import { Stack } from '@mui/material';
import { ExtraFieldChip } from './ExtraFieldChip';
import { ExtraFieldsForm } from './ExtraFieldsForm';
import { ExtraFieldsFormProps } from '../../../models/itemExtraFieldsProps';

const ExtraFieldsList: FC<ExtraFieldsFormProps> = ({ extraFields, setExtraFields }) => {
  return (
    <>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 0.5,
        }}
      >
        {extraFields.map(({ name, type }) => (
          <ExtraFieldChip
            key={name + type}
            name={name}
            type={type}
            extraFields={extraFields}
            setExtraFields={setExtraFields}
          />
        ))}
      </Stack>
      <ExtraFieldsForm extraFields={extraFields} setExtraFields={setExtraFields} />
    </>
  );
};

export { ExtraFieldsList };
