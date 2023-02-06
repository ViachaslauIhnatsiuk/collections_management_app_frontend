const tableHeaderTitles = [
  { id: 'id', label: 'ID', minWidth: 30 },
  {
    id: 'title',
    label: 'Title',
    minWidth: 150,
  },
  {
    id: 'tags',
    label: 'Tags',
    minWidth: 350,
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
