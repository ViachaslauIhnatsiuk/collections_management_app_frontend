import { FC } from 'react';
import { ICollection } from '../../../store/slices/collectionSlice/collectionModel';
import { CollectionFormField } from './CollectionFormField';

const CollectionFormFields: FC<{ fieldsValues: ICollection }> = ({ fieldsValues }) => {
  return (
    <>
      <CollectionFormField
        type="title"
        minLength={1}
        maxLength={25}
        value={fieldsValues.title}
      />
      <CollectionFormField
        type="topic"
        minLength={1}
        maxLength={25}
        value={fieldsValues.topic}
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
