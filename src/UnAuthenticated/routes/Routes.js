import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  landing as landingRoutes,
  auth as authRoutes,
  //signIn as signInRoutes,
  //signUp as signUpRoutes
} from "./index";

import AuthLayout from "../layouts/Auth";

import Page404 from "../pages/auth/Page404";
//import SignIn from "../pages/auth/SignIn";

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

const Routes = () => (
  <Router>
    <ScrollToTop>
      <Switch>
		{childRoutes(AuthLayout, landingRoutes)}
		{childRoutes(AuthLayout, authRoutes)}
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
