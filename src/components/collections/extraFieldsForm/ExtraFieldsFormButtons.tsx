import { FC } from 'react';
import { Button } from '@mui/material';
import { ExtraFieldsFormButtonProps } from '../../../models/itemExtraFieldsProps';

const ExtraFieldsFormButton: FC<ExtraFieldsFormButtonProps> = ({
  fieldName,
  fieldDataType,
  setField,
}) => {
  return (
    <Button
      variant="contained"
      size="small"
      onClick={setField}
      disabled={!(fieldName && fieldDataType)}
    >
      Add
    </Button>
  );
};

export { ExtraFieldsFormButton };
