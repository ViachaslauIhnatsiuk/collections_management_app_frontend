import { FC } from 'react';
import { CollectionFormField } from './CollectionFormField';

const CollectionFormFields: FC = () => {
  return (
    <>
      <CollectionFormField type="title" minLength={1} maxLength={25} />
      <CollectionFormField type="topic" minLength={1} maxLength={25} />
      <CollectionFormField
        type="description"
        minLength={1}
        maxLength={100}
        multi={true}
        rows={3}
      />
    </>
  );
};

export { CollectionFormFields };
