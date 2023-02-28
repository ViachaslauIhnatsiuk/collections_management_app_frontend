import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { IItem } from '../../../store/slices/itemSlice/itemModel';
import { HeaderSearchOptionProps } from '../../../models/componentsProps';

const HeaderSearchOption: FC<HeaderSearchOptionProps> = ({ props, option }) => {
  return (
    <Link
      to={`/all-collections/${option.collectionId}/items/${option._id}`}
      style={{ textDecoration: 'none' }}
    >
      <Grid container {...(props as IItem)}>
        <Grid item sx={{ color: 'text.primary' }}>
          {option.title}
        </Grid>
      </Grid>
    </Link>
  );
};

export { HeaderSearchOption };
