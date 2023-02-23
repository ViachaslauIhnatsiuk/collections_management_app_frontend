import { FC } from 'react';
import { Box, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CollectionExtraFieldProps } from '../../../../models/collectionFormProps';

const CollectionExtraField: FC<CollectionExtraFieldProps> = (props) => {
  const { extraField, extraFields, setExtraFields } = props;

  const removeExtraField = (): void => {
    const updatedExtraFields = extraFields.filter(({ id }) => id !== extraField.id);
    setExtraFields(updatedExtraFields);
  };

  return (
    <ListItem
      sx={{
        width: '95%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1,
        border: '1px solid #dddddd',
        borderRadius: 0.5,
        px: 0.5,
        py: 0.1,
      }}
    >
      <Box>Name: {extraField.name}</Box>
      <Box>Type: {extraField.type}</Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={removeExtraField}
      >
        <DeleteIcon />
      </Box>
    </ListItem>
  );
};

export { CollectionExtraField };
