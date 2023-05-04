import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
}from './routes/root';
import ErrorPage from './error-page';
import Contact, {
      loader as  contactLoader,
      action as favoriteAction,
} from './routes/contact';

import EditContact, {
                    action as editAction,
                  loader as editLoader} from './routes/edit';
import {action as deleteContact} from './routes/destroy';
import Index from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
          action: favoriteAction,
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: editLoader,
          action: editAction,
        },
        {
          path: "contacts/:contactId/destroy",
          action: deleteContact,
        },
      ],
    }      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
