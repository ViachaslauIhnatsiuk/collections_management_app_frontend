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

interface IExtraField {
  name: string;
  type: string;
}

interface ExtraFieldsFormProps {
  extraFields: IExtraField[];
  setExtraFields: Dispatch<SetStateAction<IExtraField[]>>;
}

interface ExtraFieldChipProps extends ExtraFieldsFormProps, IExtraField {}

export type {
  ExtraFieldsFormInputProps,
  ExtraFieldsFormSelectProps,
  ExtraFieldsFormButtonProps,
  IExtraField,
  ExtraFieldsFormProps,
  ExtraFieldChipProps,
};
