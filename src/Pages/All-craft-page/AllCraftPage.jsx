import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EachCraft from "../../Components/All-Craft-component/EachCraft";

const AllCraftPage = () => {
  const allCraftLoaded = useLoaderData();
  const [allCrafts, setAllCrafts] = useState(allCraftLoaded);
  return (
    <>
      <div>
        {allCrafts.map((eachCraftObj) => (
          <EachCraft
            key={eachCraftObj._id}
            allCrafts={allCrafts}
            eachCraftObj={eachCraftObj}
            setAllCrafts={setAllCrafts}
          />
        ))}
      </div>
    </>
  );
};

export default AllCraftPage;
