const customScrollbarStyles = {
  '&::-webkit-scrollbar': {
    width: 5,
    height: 5,
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#eeeeee',
    borderRadius: '5px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#d3d3d3',
    borderRadius: '5px',
  },
};

const textareaScrollbarStyles = {
  'textarea::-webkit-scrollbar': {
    width: 5,
    height: 5,
  },
  'textarea::-webkit-scrollbar-track': {
    backgroundColor: '#eeeeee',
    borderRadius: '5px',
  },
  'textarea::-webkit-scrollbar-thumb': {
    backgroundColor: '#d3d3d3',
    borderRadius: '5px',
  },
};

const dataGridStyles = {
  p: 2,
  minWidth: '100%',
  '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
    width: 5,
    height: 5,
  },
  '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
    backgroundColor: '#eeeeee',
    borderRadius: '5px',
  },
  '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
    backgroundColor: '#d3d3d3',
    borderRadius: '5px',
  },
  '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
    outline: 'none',
  },
  '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus': {
    outline: 'none',
  },
  '& .MuiDataGrid-columnSeparator--sideRight': {
    display: 'none',
  },
};

const collectionImageBoxStyles = {
  width: '100%',
  height: '120px',
  mb: 1,
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

export {
  customScrollbarStyles,
  textareaScrollbarStyles,
  dataGridStyles,
  collectionImageBoxStyles,
  cardImageBoxStyles,
};
