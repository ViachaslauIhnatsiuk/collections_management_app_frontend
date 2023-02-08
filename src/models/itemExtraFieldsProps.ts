import { Dispatch, SetStateAction } from 'react';
import { IExtraFieldValue } from './componentsModels';

interface ExtraFieldsProps {
  extraFields: IExtraFieldValue[];
  setExtraFields: Dispatch<SetStateAction<IExtraFieldValue[]>>;
}

interface ExtraFieldProps extends ExtraFieldsProps {
  label: string;
  index: number;
}

export type { ExtraFieldsProps, ExtraFieldProps };
