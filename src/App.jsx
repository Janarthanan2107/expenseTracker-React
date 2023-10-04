import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/routes/root";
import { Transaction } from "./components/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  { path: "", element: <Transaction /> },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
