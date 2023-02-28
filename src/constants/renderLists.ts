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

const cloudTagsPalette = [
  '#1d4348',
  '#6be8ff',
  '#173a3e',
  '#00c6eb',
  '#05d9ff',
  '#234d51',
  '#476e72',
  '#0e292e',
  '#68878b',
  '#becccd',
  '#275459',
  '#38e0ff',
  '#e5eaeb',
  '#93aaac',
];

export {
  tableHeaderTitles,
  collectionTopics,
  collectionExtraFieldsTypes,
  cloudTagsPalette,
};
