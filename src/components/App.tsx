import { FC } from 'react';
import { Header } from './header/Header';
import { ToastNotification } from './UI/ToastNotification';

const App: FC = () => {
  return (
    <>
      <Header />
      <ToastNotification />
    </>
  );
};

export { App };
