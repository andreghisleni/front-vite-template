import React, { createContext, useContext, useState } from 'react';

interface HeaderContextData {
  title: string;
  setTitle: (title: string) => void;
}
export const HeaderContext = createContext<HeaderContextData>(
  {} as HeaderContextData,
);

export const useHeader = (): HeaderContextData => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
};

export const HeaderProvider: React.FC = ({ children }) => {
  const [title, setTitle] = useState('');
  return (
    <HeaderContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderContext.Provider>
  );
};
