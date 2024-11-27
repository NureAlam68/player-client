import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Banner from "../components/Banner";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Banner></Banner>
            }
        ]
    }
])

export default router;