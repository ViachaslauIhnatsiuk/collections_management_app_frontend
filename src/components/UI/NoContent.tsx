import { FC } from 'react';
import { Box, useTheme } from '@mui/material';

const NoContent: FC<{ text: string }> = ({ text }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        placeContent: 'center',
        pt: 2,
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 500,
        color: theme.palette.text.secondary,
      }}
    >
      THERE ARE NO {text} YET
    </Box>
  );
};

export { NoContent };
