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
import { collectionTopics } from '../../../constants/renderLists';

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
        {...register(type as CollectionFormType, {
          required: true,
        })}
        onChange={handleChange}
      >
        {collectionTopics.map((topic, index) => (
          <MenuItem key={index} value={topic}>
            {topic}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { CollectionTopicSelect };
