import AccordianPage from "./pages/accordian_page";
import LayoutPage from "./pages/layout_page";
import ModalPage from "./pages/modal_page";
import SelectSearchPage from "./pages/select_search_page";
import TablePage from "./pages/table_page";
import { Navigate } from "react-router";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function AllRoutes(){
    const router = createBrowserRouter(
    [
        {
          path: "/",
          element: <LayoutPage />,
          children: [
            {
              path: "/",
              element: <Navigate to="/accordian" />
            },
            {
              path: "/accordian",
              element: <AccordianPage />
            },
            {
              path: "/dropdown",
              element: <SelectSearchPage />
            },
            {
              path: "/modal",
              element: <ModalPage />
            },
            {
              path: "/table",
              element: <TablePage />
            },
          ],
        },
        {
          path: '/*',
          element: <Navigate to="/accordian" />
        }
    ]);

    return (<RouterProvider router={router} />);
}

export default AllRoutes