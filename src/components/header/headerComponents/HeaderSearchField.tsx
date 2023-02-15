import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { IItem } from '../../../store/slices/itemSlice/itemModel';
import { HeaderSearchFieldProps } from '../../../models/componentsProps';

const HeaderSearchField: FC<HeaderSearchFieldProps> = ({ props, option }) => {
  return (
    <Link
      to={`/all-collections/${option.collectionId}/items/${option._id}`}
      style={{ textDecoration: 'none' }}
    >
      <Grid container {...(props as IItem)}>
        <Grid item xs={6}>
          {option.title}
        </Grid>
      </Grid>
    </Link>
  );
};

export { HeaderSearchField };
