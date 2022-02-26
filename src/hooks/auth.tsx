import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '@services/api';
import { getItem, removeItem, setItem } from '@utils/localstorage';

interface SignInCredentials {
  user: string;
  password: string;
}
interface UserData {
  id: string;
  name: string;
  email: string;
  avatar: string;
  avatar_url: string;
  created_at: Date;
  updated_at: Date;
}
interface AuthState {
  token: string;
  user: UserData;
}
interface AuthContextData {
  user: UserData;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: UserData): void;
}
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = getItem('token');
    const user = getItem('user');
    if (token && user) {
      (api.defaults.headers as any).authorization = `Bearer ${token}`;
      return {
        token,
        user: JSON.parse(user),
      };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ user: userName, password }: SignInCredentials) => {
      const response = await api.post<{
        token: string;
        refreshToken: string;
        user: UserData;
      }>('sessions', {
        user: userName,
        password,
      });
      const { token, refreshToken, user } = response.data;

      setItem('token', token);
      setItem('refreshToken', refreshToken);
      setItem('user', JSON.stringify(user));

      (api.defaults.headers as any).authorization = `Bearer ${token}`;

      setData({ token, user });
    },
    [],
  );

  const signOut = useCallback(() => {
    (api.defaults.headers as any).authorization = ``;
    removeItem('token');
    removeItem('refreshToken');
    removeItem('user');
    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: UserData) => {
      setItem('user', JSON.stringify(user));
      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );
  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
