import { FC } from 'react';
import { Box } from '@mui/material';
import { cardImageBoxStyles } from '../../../constants/componentsStyles';
import defaultImage from '../../../assets/default.jpg';

const CollectionCardImage: FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <Box sx={cardImageBoxStyles}>
      <Box component="img" src={imageUrl || defaultImage} alt="image" />
    </Box>
  );
};

export { CollectionCardImage };
