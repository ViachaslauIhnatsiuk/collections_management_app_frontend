import { FC, useState } from 'react';
import { Stack } from '@mui/material';
import { ExtraFieldChip } from './ExtraFieldChip';
import { ExtraFieldsForm } from './ExtraFieldsForm';
import { IExtraFields } from '../../../models/componentsProps';

const ExtraFieldsList: FC = () => {
  const [extraFields, setExtraFields] = useState<IExtraFields[]>([]);

  return (
    <>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          mt: 2,
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
