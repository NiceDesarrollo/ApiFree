import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/Error/ErrorPage";
import { CatFacts } from "../components/Api/Animals/CatFacts/CatFacts";
import { MainPage } from "../components/MainPage/MainPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/CatFacts",
        element: <CatFacts />,
      },
    ],
  },
]);

export default router;
