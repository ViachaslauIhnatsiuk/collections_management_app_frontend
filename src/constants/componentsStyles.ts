import { styled, Switch } from '@mui/material';
import { darkThemeIcon, lightThemeIcon } from './themeSwitcherIcons';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 56,
  height: 30,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 3,
    padding: 0,
    transform: 'translateX(2px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(24px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('${darkThemeIcon}')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#275459' : '#121212',
    width: 24,
    height: 24,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('${lightThemeIcon}')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 10,
  },
}));

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

const itemCardLikesStyles = {
  position: 'absolute',
  top: -3,
  right: -3,
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'flex-end',
  px: 1.5,
  gap: 1,
  height: 30,
  borderRadius: 1,
};

const itemsCommentsListStyles = {
  width: '100%',
  maxHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  gap: 1,
  px: 2,
  py: 1,
};

const itemFormFieldsStyles = {
  maxHeight: 350,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1,
  py: 1,
  pr: 0.5,
  mr: -1,
  overflow: 'auto',
};

const itemCheckboxStyles = {
  width: '100%',
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  m: 0,
  pl: 1.5,
  border: '1px solid #d3d3d3',
  borderRadius: 1,
  color: 'text.secondary',
};

const largestCollectionsListStyles = {
  maxHeight: 330,
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))',
  gap: 2,
  p: 0.5,
  overflowX: 'auto',
};

const lastAddedItemsListStyles = {
  maxHeight: 310,
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  px: 1,
  py: 0.2,
  overflow: 'auto',
};

const mainPageContainerStyles = {
  py: { md: 6, sm: 4, xs: 3 },
  display: 'flex',
  flexDirection: 'column',
  gap: { md: 10, sm: 6, xs: 3 },
};

const collectionsListStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: 4,
};

export {
  MaterialUISwitch,
  dataGridStyles,
  collectionImageBoxStyles,
  cardImageBoxStyles,
  headerSearchInputStyles,
  itemCardLikesStyles,
  itemsCommentsListStyles,
  itemFormFieldsStyles,
  itemCheckboxStyles,
  largestCollectionsListStyles,
  lastAddedItemsListStyles,
  mainPageContainerStyles,
  collectionsListStyles,
};
