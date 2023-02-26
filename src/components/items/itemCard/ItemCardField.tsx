import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const ItemCardField: FC<{ title: string; value: string }> = ({ title, value }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, height: 20 }}>
      <Typography sx={{ fontSize: 14, fontWeight: 600 }}>{title}:</Typography>
      <Box sx={{ fontSize: 14 }}>
        <ReactMarkdown>{value}</ReactMarkdown>
      </Box>
    </Box>
  );
};

export { ItemCardField };
