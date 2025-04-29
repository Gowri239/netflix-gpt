import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Body />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
