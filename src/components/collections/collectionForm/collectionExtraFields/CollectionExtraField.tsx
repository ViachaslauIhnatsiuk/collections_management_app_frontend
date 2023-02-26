import { FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CollectionExtraFieldProps } from '../../../../models/collectionFormProps';

const CollectionExtraField: FC<CollectionExtraFieldProps> = (props) => {
  const { extraField, extraFields, setExtraFields } = props;

  const removeExtraField = (): void => {
    const updatedExtraFields = extraFields.filter(({ id }) => id !== extraField.id);
    setExtraFields(updatedExtraFields);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 0.5,
        px: 0.7,
        py: 0.5,
      }}
    >
      <Typography sx={{ fontSize: 13 }}>
        {extraField.name} ({extraField.type})
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={removeExtraField}
      >
        <DeleteIcon color="primary" />
      </Box>
    </Paper>
  );
};

export { CollectionExtraField };
