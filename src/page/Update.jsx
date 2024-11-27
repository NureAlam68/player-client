import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedPlayer = useLoaderData();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const role = form.role.value;
        const photo = form.photo.value;
        const updatedPlayer = {role, name, photo}

        fetch(`http://localhost:5000/players/${loadedPlayer._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPlayer)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                alert('player updated successfully')
            }
        })
    }

    return (
        <div className="hero h-[400px] md:h-[450px] lg:h-[600px] mt-10 lg:mt-[88px] bg-bgOne bg-center bg-cover">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Update player!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Footballer or cricketer</span>
                </label>
                <input type="text" name="role" defaultValue={loadedPlayer?.role} placeholder="role" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" defaultValue={loadedPlayer?.name} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" name="photo" defaultValue={loadedPlayer?.photo} placeholder="photo url" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Update;