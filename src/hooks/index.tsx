import React from 'react';

import { AuthProvider } from './auth';
import { HeaderProvider } from './header';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <HeaderProvider>{children}</HeaderProvider>
  </AuthProvider>
);

export default AppProvider;
