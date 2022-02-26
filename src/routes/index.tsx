import React from 'react';

import { Switch } from 'react-router-dom';

import { Route } from './Route';

import { Default } from '../pages/Default';
import { Erro404 } from '../pages/Erro404';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Default} />
      <Route path="/test" exact isPrivate component={Default} />

      <Route path="*" component={Erro404} />

      {/* <Route
        path="/*"
        component={() => (
          <Layout>
            <AdmRoutes />
          </Layout>
        )}
        isPrivate
      /> */}
    </Switch>
  );
};
