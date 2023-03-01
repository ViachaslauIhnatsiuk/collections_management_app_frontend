import { FC, lazy, ReactNode, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { selectAuth, useAppSelector } from '../store/selectors';
import { Loader } from './UI/Loader';

const MainPage = lazy(async () => ({
  default: (await import('./pages/MainPage')).MainPage,
}));

const SigninPage = lazy(async () => ({
  default: (await import('./pages/SigninPage')).SigninPage,
}));

const SignupPage = lazy(async () => ({
  default: (await import('./pages/SignupPage')).SignupPage,
}));

const ItemsPage = lazy(async () => ({
  default: (await import('./pages/ItemsPage')).ItemsPage,
}));

const ItemPage = lazy(async () => ({
  default: (await import('./pages/ItemPage')).ItemPage,
}));

const CollectionsPage = lazy(async () => ({
  default: (await import('./pages/CollectionsPage')).CollectionsPage,
}));

const UserCollectionsPage = lazy(async () => ({
  default: (await import('./pages/UserCollectionsPage')).UserCollectionsPage,
}));

const AdminPage = lazy(async () => ({
  default: (await import('./pages/AdminPage')).AdminPage,
}));

const NotFoundPage = lazy(async () => ({
  default: (await import('./pages/NotFoundPage')).NotFoundPage,
}));

const AppRouterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuth } = useAppSelector(selectAuth);

  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <MainPage />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <MainPage />
            </Suspense>
          }
        />
        <Route
          path="/signin"
          element={
            !isAuth ? (
              <Suspense fallback={<Loader />}>
                <SigninPage />
              </Suspense>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !isAuth ? (
              <Suspense fallback={<Loader />}>
                <SignupPage />
              </Suspense>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/all-collections"
          element={
            <Suspense fallback={<Loader />}>
              <CollectionsPage />
            </Suspense>
          }
        />
        <Route
          path="/all-collections/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ItemsPage />
            </Suspense>
          }
        />
        <Route
          path="/all-collections/:id/items/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ItemPage />
            </Suspense>
          }
        />
        <Route
          path="/user-collections"
          element={
            isAuth ? (
              <Suspense fallback={<Loader />}>
                <UserCollectionsPage />
              </Suspense>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/user-collections/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ItemsPage />
            </Suspense>
          }
        />
        <Route
          path="/user-collections/:id/items/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ItemPage />
            </Suspense>
          }
        />
        <Route
          path="/admin"
          element={
            isAuth ? (
              <Suspense fallback={<Loader />}>
                <AdminPage />
              </Suspense>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouterProvider };
