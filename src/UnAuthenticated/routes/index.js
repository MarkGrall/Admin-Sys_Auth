import {
  Users as UsersIcon
} from "react-feather";

//import {BrowserRouter as Router,Route, Redirect,Switch} from 'react-router-dom';

// Auth
import SignIn_Authentication from "../pages/auth/SignIn_Authentication";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import Page404 from "../pages/auth/Page404";
import Page500 from "../pages/auth/Page500";


const landingRoutes = {
  path: "/",
  name: "Landing Page",
  component: SignIn_Authentication,
  children: null
};


const authRoutes = {
  path: "/auth",
  name: "Auth",
  icon: UsersIcon,
  badgeColor: "secondary",
  badgeText: "12/24",
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn_Authentication
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500
    }
  ]
};



export const landing = [landingRoutes];

// Auth specific routes
export const auth = [authRoutes];


