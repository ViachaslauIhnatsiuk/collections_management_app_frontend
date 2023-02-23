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

export { tableHeaderTitles };
