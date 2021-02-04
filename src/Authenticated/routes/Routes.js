import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';

  
import {
  landing as landingRoutes,
  plans as plansRoutes
} from "./index";

import plansLayout from "../layouts/Plans";
import AuthLayout from "../layouts/Auth";

import Page404 from "../pages/auth/Page404";
//import Page500 from "../pages/auth/Page500";

//import ClientOverview from "../pages/Client";
//const ClientOverview = async(() => import("../pages/Client"));


import ScrollToTop from "../components/ScrollToTop";

const childRoutes = (Layout, routes) =>
  routes.map(({ children, path, component: Component }, index) =>
    children ? (
      // Route item with children
      children.map(({ path, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      ))
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        exact
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  );

//{childRoutes(plansLayout, landingRoutes)}
//{childRoutes(AuthLayout, authRoutes)}
//{childRoutes(plansLayout, plansRoutes)}

//{childRoutes(AuthLayout, authRoutes)}

const Routes = () => (
  <Router>
    <ScrollToTop>
      <Switch>
		{childRoutes(plansLayout, landingRoutes)}       
		{childRoutes(plansLayout, plansRoutes)}

        <Route
          render={() => (
            <AuthLayout>
              <Page404 />
            </AuthLayout>
          )}
        />

      </Switch>
    </ScrollToTop>
  </Router>
);

export default Routes;
