import { FC } from 'react';
import { Button } from '@mui/material';
import { ExtraFieldsFormButtonProps } from '../../../models/itemExtraFieldsProps';

const ExtraFieldsFormButton: FC<ExtraFieldsFormButtonProps> = ({ setField }) => {
  return (
    <Button variant="contained" size="small" onClick={setField}>
      Add
    </Button>
  );
};

export { ExtraFieldsFormButton };
