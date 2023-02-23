import { FC, useState } from 'react';
import { Box, Divider } from '@mui/material';
import { IExtraField } from '../../../../models/componentsModels';
import { CollectionExtraFieldsInput } from './CollectionExtraFieldsInput';
import { CollectionExtraFieldsSelect } from './CollectionExtraFieldsSelect';
import { CollectionExtraFieldsButton } from './CollectionExtraFieldsButton';
import { CollectionExtraFieldsFormProps } from '../../../../models/collectionFormProps';
import { initialExtraFieldValue } from '../../../../constants/initialFieldsValues';

const CollectionExtraFieldsForm: FC<CollectionExtraFieldsFormProps> = (props) => {
  const { extraFields, setExtraFields } = props;
  const [newExtraField, setNewExtraField] = useState<IExtraField>(initialExtraFieldValue);

  return (
    <Box
      sx={{
        width: '100%',
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
        <CollectionExtraFieldsInput
          newExtraField={newExtraField}
          setNewExtraField={setNewExtraField}
        />
        <CollectionExtraFieldsSelect
          newExtraField={newExtraField}
          setNewExtraField={setNewExtraField}
        />
      </Box>
      <CollectionExtraFieldsButton
        extraFields={extraFields}
        newExtraField={newExtraField}
        setExtraFields={setExtraFields}
        setNewExtraField={setNewExtraField}
      />
      <Divider sx={{ width: '95%', mt: 2 }} />
    </Box>
  );
};

export { CollectionExtraFieldsForm };
