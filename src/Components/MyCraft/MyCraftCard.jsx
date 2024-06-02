import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftCard = ({ eachItem, items, setItems, control, setControl }) => {
  const { image_url, item_name, short_desc, _id, customization } = eachItem;

  const handleDeleteItem = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user-items/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
              const remaining = items.filter((item) => item._id !== _id);
              setItems(remaining); // Update the state with remaining items
            } else {
              Swal.fire("Error!", "Item could not be deleted.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the item.",
              "error"
            );
          });
      }
    });
  };

  // const handleUpdateItem = (_id) => {
  //   const updatedItemData = {
  //     // Prepare updated item data here
  //     // For example, you can open a modal to collect new item details
  //     // and then send a PUT request to update the item
  //   };

  //   fetch(`http://localhost:5000/user-items/${_id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedItemData),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       throw new Error("Failed to update item.");
  //     })
  //     .then((data) => {
  //       // Handle success message or update UI as needed
  //       console.log(data.message);
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error("Error updating item:", error);
  //     });
  // };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image_url} alt="Item Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item_name}</h2>
        <p>Description: {short_desc}</p>
        <span>Customization: {customization}</span>
        <div className="card-actions">
          <button
            onClick={() => handleDeleteItem(_id)}
            className="btn bg-red-600"
          >
            Delete
          </button>
          <Link to={`/update-crafts/${_id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>
          <Link to={`/user-view-details/${_id}`}>
            <button className="btn btn-link text-blue-700">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCraftCard;
