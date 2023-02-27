import { FC } from 'react';
import { Divider, Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from '../../../firebase/firebase';
import { SocialAuthButton } from './SocialAuthButton';

const SocialAuthButtons: FC = () => {
  return (
    <Stack sx={{ width: '100%', alignItems: 'center', gap: 1 }}>
      <Divider sx={{ width: '90%', my: 1 }}>or</Divider>
      <SocialAuthButton
        provider={googleProvider}
        value="Continue with Google"
        icon={<GoogleIcon style={{ fontSize: 22 }} />}
      />
      <SocialAuthButton
        provider={facebookProvider}
        value="Continue with Facebook"
        icon={<FacebookIcon style={{ fontSize: 24 }} />}
      />
      <SocialAuthButton
        provider={githubProvider}
        value="Continue with Github"
        icon={<GitHubIcon style={{ fontSize: 20 }} />}
      />
    </Stack>
  );
};

export { SocialAuthButtons };
