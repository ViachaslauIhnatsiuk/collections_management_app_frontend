import { FC } from 'react';
import { ItemFormField } from './ItemFormField';

const ItemFormFields: FC<{ extraFields: string[] }> = ({ extraFields }) => {
  return (
    <>
      <ItemFormField type="title" minLength={1} maxLength={25} value="" />
      <ItemFormField type="tags" minLength={1} maxLength={25} value="" />
      {extraFields?.map((field, index) => {
        return <ItemFormField key={index} type={field} value="" />;
      })}
    </>
  );
};

export { ItemFormFields };
