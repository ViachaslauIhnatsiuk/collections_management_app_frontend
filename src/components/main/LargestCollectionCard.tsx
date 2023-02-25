import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ICollection } from '../../store/slices/collectionSlice/collectionModel';
import defaultImage from '../../assets/default.jpg';

const LargestCollectionCard: FC<ICollection> = (props) => {
  const { _id, title, description, imageUrl } = props;

  return (
    <Link to={`/all-collections/${_id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ minWidth: 170 }}>
        <CardMedia sx={{ height: 100 }} image={imageUrl || defaultImage} title="image" />
        <CardContent sx={{ pt: 1 }}>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="caption" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export { LargestCollectionCard };
