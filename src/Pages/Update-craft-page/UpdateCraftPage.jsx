import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UpdateCraftPage = () => {
  const { id } = useParams();
  const [craft, setCraft] = useState({});
  const { user } = useContext(AuthContext) || {};

  useEffect(() => {
    fetch(`http://64.23.188.142:5000/user-items/${id}`)
      .then((res) => res.json())
      .then((data) => setCraft(data))
      .catch((error) => console.error("Error fetching craft:", error));
  }, [id]);

  const handleUpdateCraft = (event) => {
    event.preventDefault();

    const form = event.target;
    const image_url = form.image_url.value;
    const item_name = form.item_name.value;
    const subcategory = form.subcategory_name.value;
    const short_desc = form.desc.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.custom.value;
    const process_time = form.time.value;
    const stock_status = form.stock_status.value;
    const email = user.email || form.email.value;
    const name = user.displayName || form.name.value;

    const updatedCraft = {
      image_url,
      item_name,
      subcategory,
      short_desc,
      price,
      rating,
      customization,
      process_time,
      stock_status,
      email,
      name,
    };

    fetch(`http://64.23.188.142:5000/user-items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated data successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to update data",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating craft:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while updating the craft.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  if (!craft) return <div>Loading...</div>;

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">
        Update craft {craft.item_name}
      </h2>
      <form onSubmit={handleUpdateCraft}>
        {/* Image and item name */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image_url"
                defaultValue={craft.image_url}
                placeholder="img_url"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="item_name"
                defaultValue={craft.item_name}
                placeholder="Item Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Subcategory name and short desc */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subcategory_name"
                defaultValue={craft.subcategory}
                placeholder="Subcategory Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="desc"
                defaultValue={craft.short_desc}
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Price and Rating */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={craft.price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                defaultValue={craft.rating}
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Customization Processing time */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="custom"
                defaultValue={craft.customization}
                placeholder="Yes or No"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="time"
                defaultValue={craft.process_time}
                placeholder="Processing time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Stock status */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="stock_status"
                defaultValue={craft.stock_status}
                placeholder="In stock, Made to order"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Craft"
          className="btn btn-block bg-purple-800 text-white"
        />
      </form>
    </div>
  );
};

export default UpdateCraftPage;
