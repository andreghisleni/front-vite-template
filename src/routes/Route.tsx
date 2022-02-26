import React from 'react';

import { RouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '@hooks/auth';

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}
export const Route: React.FC<Props> = ({
  isPrivate = false,
  component: Component,
  ...props
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...props}
      render={({ location }) => {
        const to = {
          pathname: isPrivate ? '/' : '/dashboard',
          state: { from: location },
        };
        return isPrivate === !!user ? <Component /> : <Redirect to={to} />;
      }}
    />
  );
};
