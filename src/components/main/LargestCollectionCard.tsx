import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import { useItems } from '../../hooks/useItems';
import { ICollection } from '../../store/slices/collectionSlice/collectionModel';
import defaultImage from '../../assets/default.jpg';

const LargestCollectionCard: FC<ICollection> = (props) => {
  const { _id, title, topic, imageUrl } = props;
  const { getCollectionItems } = useItems();

  return (
    <Link to={`/all-collections/${_id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ position: 'relative' }}>
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            top: 3,
            right: 3,
            px: 0.5,
            fontSize: 12,
          }}
        >
          {getCollectionItems(_id as string).length} items
        </Paper>
        <CardMedia
          sx={{ height: 80, borderRadius: 0.5 }}
          image={imageUrl || defaultImage}
          title="image"
        />
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
