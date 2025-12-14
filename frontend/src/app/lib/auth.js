const TOKEN_KEY = "token";

export const saveAuth = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getAuth = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const clearAuth = () => {
  localStorage.removeItem(TOKEN_KEY);
};
