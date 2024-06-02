import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const AddCraftPage = () => {
  const { user } = useContext(AuthContext) || {};
  const handleAddCraft = (event) => {
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

    const newCraft = {
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

    console.log(newCraft);

    // send data to the server
    fetch("https://for-painting-backend.onrender.com/user/add-items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        form.reset();
      });
  };
  return (
    <>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Add a Art or Craft</h2>
        <form onSubmit={handleAddCraft}>
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
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Subcategory name and short desc  */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="subcategory_name"
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
                  placeholder="Processing time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* stock status */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="stock_status"
                  placeholder="In stock , Made to order"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* user email and user name */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Craft"
            className="btn btn-block bg-purple-800 text-white"
          />
        </form>
      </div>
    </>
  );
};

export default AddCraftPage;
