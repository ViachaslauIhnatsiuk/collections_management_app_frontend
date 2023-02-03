type CollectionFormType = 'title' | 'description' | 'topic';

interface ICollectionForm {
  title: string;
  description: string;
  topic: string;
}

interface CollectionFormProps {
  type: string;
}

export type { CollectionFormType, ICollectionForm, CollectionFormProps };
