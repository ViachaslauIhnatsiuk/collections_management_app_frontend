import { FC } from 'react';
import { styled, alpha, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  flexGrow: 2,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    paddingRight: '8px',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const HeaderSearch: FC = () => {
  return (
    <SearchBar>
      <SearchIcon
        sx={{ position: 'absolute', top: '50%', transform: 'translate(10px, -50%)' }}
      />
      <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
    </SearchBar>
  );
};

export { HeaderSearch };
