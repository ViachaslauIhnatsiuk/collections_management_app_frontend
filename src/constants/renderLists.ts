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

const sidebarList = [
  { title: 'Main', link: '/' },
  { title: 'All collections', link: '/all-collections' },
  { title: 'My collections', link: '/user-collections' },
  { title: 'Admin', link: '/admin' },
  { title: 'Settings', link: '/settings' },
];

const extraFieldsSelectItems = ['Number', 'String', 'Text', 'Date', 'Boolean'];

export { tableHeaderTitles, sidebarList, extraFieldsSelectItems };
