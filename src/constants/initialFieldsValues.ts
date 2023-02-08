const initialFieldsValues = {
  _id: '',
  title: '',
  description: '',
  topic: '',
  ownerId: '',
  itemExtraFields: [],
};

const extraFieldsInitialState = [
  { name: '', type: 'number', disabled: false },
  { name: '', type: 'number', disabled: false },
  { name: '', type: 'number', disabled: false },
  { name: '', type: 'text', disabled: false },
  { name: '', type: 'text', disabled: false },
  { name: '', type: 'text', disabled: false },
  { name: '', type: 'textfield', disabled: false },
  { name: '', type: 'textfield', disabled: false },
  { name: '', type: 'textfield', disabled: false },
  { name: '', type: 'date', disabled: false },
  { name: '', type: 'date', disabled: false },
  { name: '', type: 'date', disabled: false },
  { name: '', type: 'checkbox', disabled: false },
  { name: '', type: 'checkbox', disabled: false },
  { name: '', type: 'checkbox', disabled: false },
];

export { initialFieldsValues, extraFieldsInitialState };
