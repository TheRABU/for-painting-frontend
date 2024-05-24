import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CraftCard = ({ craft, crafts, setCrafts }) => {
  const {
    _id,
    image_url,
    item_name,
    subcategory,
    short_desc,
    price,
    rating,
    customization,
    process_time,
    stock_status,
    user_email,
    user_name,
  } = craft;
  //This section is commented beacuse no user can modify that. It's just for GET method.
  // const handleDelete = (_id) => {
  //   console.log(_id);
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`http://localhost:5000/delete-crafts/craft/${_id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           if (data.deletedCount > 0) {
  //             Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
  //             const remaining = crafts.filter((cruf) => cruf._id !== _id);
  //             setCrafts(remaining);
  //           }
  //         });
  //     }
  //   });
  // };
  return (
    <>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {user_name}
            </a>
            <span className="text-xs dark:text-gray-600">{user_email}</span>
          </div>
        </div>
        <div>
          <img
            src={image_url}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{item_name}</h2>
          <p className="text-sm dark:text-gray-600">{short_desc}</p>
          <span className="indicator-item badge badge-primary">
            {stock_status}
          </span>
          <h3 className="font-bold"> $ {price}</h3>
        </div>
        <div className="flex flex-wrap justify-between">
          <Link
            to={`/view-details/craft/${_id}`}
            rel="noopener noreferrer"
            href="#"
            className="text-xs tracking-wider uppercase hover:underline dark:text-blue-600"
          >
            View Details
          </Link>
          {/* <Link
            to={`/update-crafts/craft/${_id}`}
            rel="noopener noreferrer"
            href="#"
            className="text-xs tracking-wider uppercase hover:underline dark:text-blue-600"
          >
            Update
          </Link> */}
          {/* <button onClick={() => handleDelete(_id)} className="btn bg-red-600">
            {" "}
            Delete
          </button> */}
        </div>
      </div>
    </>
  );
};

export default CraftCard;
