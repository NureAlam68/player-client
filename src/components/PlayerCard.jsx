import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const PlayerCard = () => {
    const loadedPlayers = useLoaderData()
    const [players, setPlayers] = useState(loadedPlayers);

    
    return (
        <div className="min-h-screen mt-10 lg:mt-[88px] px-[120px]">
            <h1 className="text-[24px] lg:text-[40px] text-center font-bold">All player here</h1>
            <div className="grid grid-cols-3 mt-10 gap-8">
                {
                    players.map(player => <div key={player._id} className="card bg-base-100 shadow-xl">
                        <figure>
                          <img
                            src={player.photo}
                            className="w-full h-[260px]" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">
                            {player.name}
                            <div className="badge badge-secondary">{player.role}</div>
                          </h2>
                          <p>Who is your favorite player?</p>
                          <div className="card-actions justify-end">
                            <Link className="badge badge-outline">Update</Link>
                            <Link className="badge badge-outline">Delete</Link>
                          </div>
                        </div>
                      </div>)
                }
            </div>
        </div>
    );
};

export default PlayerCard;