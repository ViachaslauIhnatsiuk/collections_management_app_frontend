import { FC } from 'react';
import { Box } from '@mui/material';

const NoContent: FC<{ text: string; size: number }> = ({ text, size }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        placeContent: 'center',
        pt: 2,
        textAlign: 'center',
        fontSize: size,
        fontWeight: 500,
        color: 'text.secondary',
      }}
    >
      THERE ARE NO {text} YET
    </Box>
  );
};

export { NoContent };
