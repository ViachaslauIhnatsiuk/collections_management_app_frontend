import { FC, useState } from 'react';
import { Stack } from '@mui/material';
import { ExtraFieldsFormProps } from '../../../models/componentsProps';
import { ExtraFieldsFormInput } from './ExtraFieldsFormInput';
import { ExtraFieldsFormSelect } from './ExtraFieldsFormSelect';
import { ExtraFieldsFormButton } from './ExtraFieldsFormButtons';

const ExtraFieldsForm: FC<ExtraFieldsFormProps> = ({ extraFields, setExtraFields }) => {
  const [fieldName, setFieldName] = useState<string>('');
  const [fieldDataType, setFieldDataType] = useState<string>('');

  const setField = (): void => {
    const newField = { name: fieldName, type: fieldDataType };

    if (fieldName && fieldDataType) {
      setExtraFields([...extraFields, newField]);
      setFieldName('');
      setFieldDataType('');
    }
  };

  return (
    <Stack sx={{ mt: 2, gap: 1 }}>
      <Stack sx={{ flexDirection: 'row', gap: 1 }}>
        <ExtraFieldsFormInput fieldName={fieldName} setFieldName={setFieldName} />
        <ExtraFieldsFormSelect
          fieldDataType={fieldDataType}
          setFieldDataType={setFieldDataType}
        />
      </Stack>
      <ExtraFieldsFormButton setField={setField} />
    </Stack>
  );
};

export { ExtraFieldsForm };
