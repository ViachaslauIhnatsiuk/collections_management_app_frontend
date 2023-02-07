import { FC } from 'react';
import { CollectionFormField } from './CollectionFormField';
import { CollectionTopicSelect } from './CollectionTopicSelect';
import { CollectionFormFieldsProps } from '../../../models/collectionFormProps';

const CollectionFormFields: FC<CollectionFormFieldsProps> = ({ fieldsValues }) => {
  return (
    <>
      <CollectionTopicSelect type="topic" value="" />
      <CollectionFormField
        type="title"
        minLength={1}
        maxLength={25}
        value={fieldsValues.title}
      />
      <CollectionFormField
        type="description"
        minLength={1}
        maxLength={100}
        multi={true}
        rows={3}
        value={fieldsValues.description}
      />
    </>
  );
};

export { CollectionFormFields };
