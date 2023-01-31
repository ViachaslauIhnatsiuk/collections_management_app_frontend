import { FC } from 'react';
import { ButtonGroup, Button } from '@mui/material';

const HeaderLocalization: FC = () => {
  return (
    <ButtonGroup variant="contained" size="small">
      <Button>EN</Button>
      <Button>RU</Button>
    </ButtonGroup>
  );
};

export { HeaderLocalization };
