const useSignout = () => {
  const signOut = (): void => {
    localStorage.removeItem('user');
    // setIsAuth(false);
  };

  return { signOut };
};

export { useSignout };
