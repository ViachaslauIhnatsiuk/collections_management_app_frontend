import { FC } from 'react';
import { List } from '@mui/material';
import { CollectionExtraField } from './CollectionExtraField';
import { customScrollbarStyles } from '../../../../constants/componentsStyles';
import { CollectionExtraFieldsFormProps } from '../../../../models/collectionFormProps';

const CollectionExtraFields: FC<CollectionExtraFieldsFormProps> = (props) => {
  const { extraFields, setExtraFields } = props;

  return (
    <List
      sx={{
        width: '100%',
        maxHeight: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.7,
        py: 0.5,
        px: 0.4,
        overflow: 'auto',
        ...customScrollbarStyles,
      }}
    >
      {extraFields.map((extraField, index) => (
        <CollectionExtraField
          key={index}
          extraField={extraField}
          extraFields={extraFields}
          setExtraFields={setExtraFields}
        />
      ))}
    </List>
  );
};

export { CollectionExtraFields };
