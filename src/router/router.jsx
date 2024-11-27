import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {}
        ]
    }
])

export default router;