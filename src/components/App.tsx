import { FC, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { selectUser, useAppSelector } from '../store/selectors';
import { setSignIn, setSignOut } from '../store/slices/userSlice/userSlice';
import { useAppDispatch } from '../store/store';
import { Header } from './header/Header';
import { MainPage } from './pages/MainPage';
import { SigninPage } from './pages/SigninPage';
import { SignupPage } from './pages/SignupPage';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(selectUser);

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      dispatch(setSignIn());
    } else {
      dispatch(setSignOut());
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={isAuth ? <MainPage /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={!isAuth ? <SigninPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!isAuth ? <SignupPage /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
