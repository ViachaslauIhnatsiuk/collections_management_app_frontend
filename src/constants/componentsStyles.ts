const dataGridStyles = {
  p: 2,
  minWidth: '100%',
  '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
    outline: 'none',
  },
  '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus': {
    outline: 'none',
  },
  '& .MuiDataGrid-columnSeparator--sideRight': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeaders': {
    fontSize: 16,
  },
};

const collectionImageBoxStyles = {
  width: '100%',
  height: '120px',
  mb: 1,
  px: 1,
  overflow: 'hidden',
  border: '1px dashed #e6e6e6',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

const cardImageBoxStyles = {
  width: '100%',
  maxHeight: '120px',
  borderRadius: '3px',
  overflow: 'hidden',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

const headerSearchInputStyles = {
  py: '2px',
  input: {
    color: '#ffffff',
    fontWeight: 100,
  },
  '& input::placeholder': {
    color: '#ffffff',
    fontWeight: 100,
  },
  '& .MuiOutlinedInput-root': {
    '& > fieldset': { border: 'none' },
  },
};

export {
  dataGridStyles,
  collectionImageBoxStyles,
  cardImageBoxStyles,
  headerSearchInputStyles,
};
