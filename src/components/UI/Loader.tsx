import { LinearProgress } from '@mui/material';

const Loader = () => {
  return (
    <LinearProgress
      color="success"
      sx={{ position: 'absolute', top: '64px', left: '0px', width: '100%' }}
    />
  );
};

export { Loader };
