import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import MyCraftCard from "../../Components/MyCraft/MyCraftCard";

const MyCraftPage = () => {
  const { user } = useContext(AuthContext) || {};
  const [items, setItems] = useState([]);
  const [control, setControl] = useState(false);
  // to load data from db
  useEffect(() => {
    fetch(`https://for-painting-backend.onrender.com/user-items/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user, control]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-5 gap-x-16 my-10 gap-y-10 md:py-20 md:px-10 h-screen">
        {items.map((eachItem) => (
          <MyCraftCard
            key={eachItem._id}
            eachItem={eachItem}
            items={items}
            setItems={setItems}
            setControl={setControl}
            control={control}
          />
        ))}
      </div>
    </>
  );
};

export default MyCraftPage;
