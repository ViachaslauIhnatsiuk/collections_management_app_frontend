import { FC } from 'react';
import { Button } from '@mui/material';
import { useSocialAuth } from '../../../hooks/useSocialAuth';
import { SocialAuthButtonProps } from '../../../models/componentsProps';

const SocialAuthButton: FC<SocialAuthButtonProps> = ({ provider, value, icon }) => {
  const { signInWithProvider } = useSocialAuth();

  return (
    <Button
      sx={{ lineHeight: 1.8 }}
      fullWidth
      variant="contained"
      size="small"
      startIcon={icon}
      onClick={() => signInWithProvider(provider)}
    >
      {value}
    </Button>
  );
};

export { SocialAuthButton };
