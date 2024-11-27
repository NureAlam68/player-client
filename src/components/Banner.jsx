import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div
        className="hero h-[400px] md:h-[450px] lg:h-[600px] mt-10 lg:mt-[88px] bg-bgOne bg-center bg-cover">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Choose your favorite player</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Link to="/addPlayer"><button className="btn btn-primary">Add Player</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;