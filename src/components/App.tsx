import { FC, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './header/Header';
import { MainPage } from './pages/MainPage';
import { SigninPage } from './pages/SigninPage';
import { SignupPage } from './pages/SignupPage';

const App: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={isAuth ? <MainPage /> : <Navigate to="/signin" />} />
          <Route
            path="/signin"
            element={!isAuth ? <SigninPage /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!isAuth ? <SignupPage /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
