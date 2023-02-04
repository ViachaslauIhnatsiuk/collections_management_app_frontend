import { Dispatch, SetStateAction } from 'react';

interface ExtraFieldsFormInputProps {
  fieldName: string;
  setFieldName: Dispatch<SetStateAction<string>>;
}

interface ExtraFieldsFormSelectProps {
  fieldDataType: string;
  setFieldDataType: Dispatch<SetStateAction<string>>;
}

interface ExtraFieldsFormButtonProps {
  fieldName: string;
  fieldDataType: string;
  setField: () => void;
}

interface IExtraFields {
  name: string;
  type: string;
}

interface ExtraFieldsFormProps {
  extraFields: IExtraFields[];
  setExtraFields: Dispatch<SetStateAction<IExtraFields[]>>;
}

interface ExtraFieldChipProps extends ExtraFieldsFormProps {
  name: string;
  type: string;
}

export type {
  ExtraFieldsFormInputProps,
  ExtraFieldsFormSelectProps,
  ExtraFieldsFormButtonProps,
  IExtraFields,
  ExtraFieldsFormProps,
  ExtraFieldChipProps,
};
