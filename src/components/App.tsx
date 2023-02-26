import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { selectAuth, useAppSelector } from '../store/selectors';
import { AppThemeProvider } from './AppThemeProvider';
import { Header } from './header/Header';
import { ToastNotification } from './UI/ToastNotification';
import { CollectionsPage } from './pages/CollectionsPage';
import { UserCollectionsPage } from './pages/UserCollectionsPage';
import { MainPage } from './pages/MainPage';
import { SigninPage } from './pages/SigninPage';
import { SignupPage } from './pages/SignupPage';
import { ItemsPage } from './pages/ItemsPage';
import { ItemPage } from './pages/ItemPage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';

const App: FC = () => {
  const { isAuth } = useAppSelector(selectAuth);

  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Header />
        <ToastNotification />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/signin"
            element={!isAuth ? <SigninPage /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!isAuth ? <SignupPage /> : <Navigate to="/" />}
          />
          <Route path="/all-collections" element={<CollectionsPage />} />
          <Route path="/all-collections/:id" element={<ItemsPage />} />
          <Route path="/all-collections/:id/items/:id" element={<ItemPage />} />
          <Route
            path="/user-collections"
            element={isAuth ? <UserCollectionsPage /> : <Navigate to="/" />}
          />
          <Route path="/user-collections/:id" element={<ItemsPage />} />
          <Route path="/user-collections/:id/items/:id" element={<ItemPage />} />
          <Route path="/admin" element={isAuth ? <AdminPage /> : <Navigate to="/" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  );
};

export { App };
