import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MyViewDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://for-painting-backend.onrender.com/user-view-details/${id}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [id]);

  return (
    <>
      <h1 className="text-center">Product details of {items.item_name}</h1>
      <div className="flex justify-center items-center">
        <Link to="/my-listed-crafts">
          <button className="btn bg-red-400 btn-circle">Go Back</button>
        </Link>
      </div>
      <div className="grid grid-cols-2 py-20 px-20">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={items.image_url} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{items.item_name}</h2>
            <p>Description: {items.short_desc}</p>
            <p>$ {items.price}</p>
            <h2>Customization: {items.customization}</h2>
            <p className="text-xl font-bold">Ratings: {items.rating}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyViewDetails;
