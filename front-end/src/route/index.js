import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Dashboard from "../pages/Main/modules/Dashboard";
import WatchingList from "../pages/Main/modules/WathcingList";
import Inventory from "../pages/Main/modules/Inventory";
import Account from "../pages/Main/modules/Account";
import {ProtectedRoute} from "../auth/protected.route";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ConfirmEmail from "../pages/ConfirmEmail";


export const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Main />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        index: true,
        element: <Navigate to={'dashboard'} />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'watching-list',
        element: <WatchingList />
      },
      {
        path: 'inventory',
        element: <Inventory />
      },
      {
        path: 'account',
        element: <Account />
      }
    ]
  },
  {
    path: 'login',
    element: <SignIn />
  },
  {
    path: 'register',
    element: <SignUp />
  },
  {
    path: 'confirm-email',
    element: <ConfirmEmail />
  }
];

export const router = createBrowserRouter(routes);