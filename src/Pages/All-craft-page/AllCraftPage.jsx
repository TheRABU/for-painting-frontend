import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EachCraft from "../../Components/All-Craft-component/EachCraft";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllCraftPage = () => {
  const { user } = useContext(AuthContext) || {};
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    fetch(`http://localhost:5000/user-all-crafts-list`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Email</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.email}</td>
                <td>{item.item_name}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/view-details/craft/${item._id}`}>
                    <button className="btn btn-square">View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllCraftPage;
