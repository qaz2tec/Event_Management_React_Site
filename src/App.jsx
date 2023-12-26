import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
//importance of typescript and numbers are displayed in purple and strings are displayed in white