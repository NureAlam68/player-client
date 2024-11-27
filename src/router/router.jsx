import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Banner from "../components/Banner";
import AddPlayer from "../page/AddPlayer";
import PlayerCard from "../components/PlayerCard";
import Update from "../page/Update";

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
                element: <AddPlayer></AddPlayer>,
            },
            {
                path: "/players",
                element: <PlayerCard></PlayerCard>,
                loader: () => fetch('http://localhost:5000/players')
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/players/${params.id}`)
            }
        ]
    }
])

export default router;