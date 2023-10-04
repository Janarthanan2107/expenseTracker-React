import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/routes/root";
import { Tracker, Transaction, NotFound } from "./components/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<NotFound/>,
    children: [
      { path: "", element: <Transaction /> },
      { path: "/tracker", element: <Tracker /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
