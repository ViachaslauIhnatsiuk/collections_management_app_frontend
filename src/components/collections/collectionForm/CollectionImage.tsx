import { FC, useCallback, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { storage, ref, getDownloadURL, uploadBytes } from '../../../firebase/firebase';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';
import { collectionImageBoxStyles } from '../../../constants/componentsStyles';
import { CollectionImageProps } from '../../../models/collectionFormProps';

const CollectionImage: FC<CollectionImageProps> = ({ imageUrl, setImageUrl }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const uploadImage = async (image: File) => {
    const imageRef = ref(storage, `collectionImages/${uuidv4()}`);
    await uploadBytes(imageRef, image);
    const url = await getDownloadURL(imageRef);
    return url;
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setLoading(true);
    const url = await uploadImage(acceptedFiles[0]);
    setImageUrl(url as string);
    setLoading(false);
  }, []);

  const { getRootProps } = useDropzone({ onDrop, multiple: false });

  return (
    <Box sx={collectionImageBoxStyles} {...getRootProps()}>
      {imageUrl ? (
        <Box component="img" src={imageUrl} alt="image" />
      ) : loading ? (
        <CircularProgress />
      ) : (
        <Typography variant="caption" align="center">
          Drag and drop your image here or click to select file
        </Typography>
      )}
    </Box>
  );
};

export { CollectionImage };
