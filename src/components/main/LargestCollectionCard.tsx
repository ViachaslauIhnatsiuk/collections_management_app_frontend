import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ICollection } from '../../store/slices/collectionSlice/collectionModel';
import defaultImage from '../../assets/default.jpg';

const LargestCollectionCard: FC<ICollection> = (props) => {
  const { _id, title, topic, imageUrl } = props;

  return (
    <Link to={`/all-collections/${_id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <CardMedia sx={{ height: 80 }} image={imageUrl || defaultImage} title="image" />
        <CardContent sx={{ pt: 1 }}>
          <Typography sx={{ fontSize: 13 }}>{title}</Typography>
          <Typography sx={{ fontSize: 11 }} color="text.secondary">
            {topic}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export { LargestCollectionCard };
