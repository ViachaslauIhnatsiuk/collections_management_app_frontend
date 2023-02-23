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
        maxHeight: '90px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.5,
        py: 0,
        pr: 0.2,
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
