import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { selectUser, useAppSelector } from '../store/selectors';
import { Header } from './header/Header';
import { CollectionsPage } from './pages/CollectionsPage';
import { MainPage } from './pages/MainPage';
import { SigninPage } from './pages/SigninPage';
import { SignupPage } from './pages/SignupPage';

const App: FC = () => {
  const { isAuth } = useAppSelector(selectUser);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={isAuth ? <MainPage /> : <Navigate to="/signin" />} />
        <Route
          path="/all-collections"
          element={isAuth ? <CollectionsPage /> : <Navigate to="/signin" />}
        />
        <Route
          path="/user-collections"
          element={isAuth ? <CollectionsPage /> : <Navigate to="/signin" />}
        />
        <Route path="/signin" element={!isAuth ? <SigninPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!isAuth ? <SignupPage /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
