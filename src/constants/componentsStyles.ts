const customScrollbarStyles = {
  '&::-webkit-scrollbar': {
    width: 5,
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

export { customScrollbarStyles, dataGridStyles };
