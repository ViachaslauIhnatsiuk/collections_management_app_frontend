interface IUserForm {
  name: string;
  email: string;
  password: string;
}

type CollectionFormType = 'user' | 'title' | 'description' | 'topic';

interface ICollectionForm {
  user: string;
  title: string;
  description: string;
  topic: string;
}

interface ICollectionExtraFieldForm {
  name: string;
  type: string;
}

interface IExtraField {
  id?: string;
  name: string;
  type: string;
}

interface ICloudTag {
  value: string;
  count: number;
  props?: {
    style: {
      cursor: string;
    };
  };
}

export type {
  IUserForm,
  CollectionFormType,
  ICollectionForm,
  ICollectionExtraFieldForm,
  IExtraField,
  ICloudTag,
};
