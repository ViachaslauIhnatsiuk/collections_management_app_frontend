import { FC } from 'react';
import { Stack } from '@mui/material';
import { CollectionExtraField } from './CollectionExtraField';
import { ExtraFieldsProps } from '../../../models/itemExtraFieldsProps';
import { extraFieldsRenderList } from '../../../constants/renderLists';
import { customScrollbarStyles } from '../../../constants/componentsStyles';

const CollectionExtraFields: FC<ExtraFieldsProps> = ({ extraFields, setExtraFields }) => {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '130px',
        gap: 0.5,
        pl: 0.5,
        pr: 1,
        overflow: 'auto',
        ...customScrollbarStyles,
      }}
    >
      {extraFieldsRenderList.map((field, index) => (
        <CollectionExtraField
          key={index}
          label={field}
          index={index}
          extraFields={extraFields}
          setExtraFields={setExtraFields}
        />
      ))}
    </Stack>
  );
};

export { CollectionExtraFields };
