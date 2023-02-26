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
        <MenuItem value="Paper money">Paper money</MenuItem>
        <MenuItem value="Coins">Coins</MenuItem>
        <MenuItem value="Model cars">Model cars</MenuItem>
        <MenuItem value="Books">Books</MenuItem>
        <MenuItem value="Baseball cards">Baseball cards</MenuItem>
        <MenuItem value="Stamps">Stamps</MenuItem>
        <MenuItem value="Fridge magnets">Fridge magnets</MenuItem>
      </Select>
    </FormControl>
  );
};

export { CollectionTopicSelect };
