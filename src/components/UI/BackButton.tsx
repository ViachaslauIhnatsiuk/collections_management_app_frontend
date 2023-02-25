import { FC } from 'react';
import { useTheme } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

const BackButton: FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <KeyboardBackspaceIcon
      onClick={() => navigate(-1)}
      fontSize="large"
      sx={{ color: theme.palette.primary.main, cursor: 'pointer' }}
    />
  );
};

export { BackButton };
