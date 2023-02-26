import { ITableHeaderTitles } from '../models/componentsModels';

const tableHeaderTitles: ITableHeaderTitles[] = [
  { id: 'id', label: 'ID', minWidth: 30 },
  {
    id: 'title',
    label: 'Title',
    minWidth: 100,
  },
  {
    id: 'tags',
    label: 'Tags',
    minWidth: 300,
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 100,
    align: 'center',
  },
];

const collectionTopics = [
  'Paper money',
  'Coins',
  'Model cars',
  'Books',
  'Baseball cards',
  'Stamps',
  'Fridge magnets',
];

const collectionExtraFieldsTypes = ['number', 'text', 'textfield', 'date', 'checkbox'];

export { tableHeaderTitles, collectionTopics, collectionExtraFieldsTypes };
