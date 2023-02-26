import { FC, useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { CollectionSelectProps } from '../../../models/collectionFormProps';
import { useFormContext } from 'react-hook-form';
import { CollectionFormType, ICollectionForm } from '../../../models/componentsModels';

const CollectionTopicSelect: FC<CollectionSelectProps> = ({ type, value }) => {
  const [topic, setTopic] = useState<string>(value);
  const { register } = useFormContext<ICollectionForm>();

  const handleChange = (event: SelectChangeEvent): void => {
    setTopic(event.target.value);
  };

  return (
    <FormControl size="small" fullWidth style={{ alignSelf: 'flex-end' }}>
      <InputLabel>topic</InputLabel>
      <Select
        value={topic}
        label="topic"
        {...register(type as CollectionFormType)}
        onChange={handleChange}
      >
        <MenuItem value="Coins">Coins</MenuItem>
        <MenuItem value="Books">Books</MenuItem>
        <MenuItem value="Stamps">Stamps</MenuItem>
        <MenuItem value="Vinyl">Vinyl</MenuItem>
        <MenuItem value="Model cars">Model cars</MenuItem>
      </Select>
    </FormControl>
  );
};

export { CollectionTopicSelect };
