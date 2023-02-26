import { FC } from 'react';
import { Button } from '@mui/material';
import { CollectionExtraFieldsButtonProps } from '../../../../models/collectionFormProps';
import { initialExtraFieldValue } from '../../../../constants/initialFieldsValues';
import { v4 as uuidv4 } from 'uuid';

const CollectionExtraFieldsButton: FC<CollectionExtraFieldsButtonProps> = (props) => {
  const { extraFields, newExtraField, setExtraFields, setNewExtraField } = props;

  const handleSubmit = (): void => {
    setExtraFields([...extraFields, { ...newExtraField, id: uuidv4() }]);
    setNewExtraField(initialExtraFieldValue);
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      type="button"
      fullWidth
      disabled={!newExtraField.name || !newExtraField.type}
      onClick={handleSubmit}
    >
      Add extra field
    </Button>
  );
};

export { CollectionExtraFieldsButton };
