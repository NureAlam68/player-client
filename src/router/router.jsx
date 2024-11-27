import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Banner from "../components/Banner";
import AddPlayer from "../page/AddPlayer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Banner></Banner>
            },
            {
                path: "/addPlayer",
                element: <AddPlayer></AddPlayer>
            }
        ]
    }
])

export default router;