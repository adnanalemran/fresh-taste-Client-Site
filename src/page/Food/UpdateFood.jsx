import Swal from "sweetalert2";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const UpdateFood = () => {
  const singleData = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      image: e.target.image.value,
      Category: e.target.Category.value,
      Quantity: e.target.Quantity.value,
      chiefNames: e.target.chiefNames.value,
      foodOrigin: e.target.foodOrigin.value,
      price: e.target.price.value,
      shortDescription: e.target.shortDescription.value,
    };

    console.log(formData);
    try {
      const response = await fetch(
        `http://localhost:5000/food/update/${singleData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Updated",
          text: "Your food has been updated successfully.",
        });
        navigate(location?.state ? location.state : `/food/${singleData._id}`);
      } else {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "An error occurred while updating the food.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="w-11/12 mx-auto max-w-4xl p-8 space-y-3 rounded-xl m-5 bg-base-300">
      <div className="hero-overlay bg-opacity-20"></div>
      <h1 className="text-2xl font-bold text-center">update a Food</h1>
      <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Food Name</label>
          <input
            type="text"
            name="name"
            defaultValue={singleData?.name}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>

        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">Image URL</label>
          <input
            type="text"
            name="image"
            defaultValue={singleData?.image}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700  focus:dark-border-violet-400"
          />
        </div>

        <div className="flex w-full gap-4">
          <div className="space-y-1 text-sm w-1/2">
            <label className="block dark-text-gray-400">Food Category</label>
            <select
              required
              name="Category"
              defaultValue={singleData.Category}
              className=" w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            >
              <option defaultValue="Appetizer">Appetizer</option>
              <option defaultValue="Soups and Salads">Soups and Salads</option>
              <option defaultValue="Entrees/Main Courses">
                Entrees/Main Courses
              </option>
              <option defaultValue="Beverages">Beverages</option>
              <option defaultValue="Kids Menu">Kids Menu</option>
            </select>
          </div>

          <div className="space-y-1 text-sm w-1/2">
            <label className="block dark-text-gray-400">
              Food Quantity(stock)
            </label>
            <input
              type="number"
              name="Quantity"
              defaultValue={singleData.Quantity}
              className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            ></input>
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="space-y-1 text-sm w-1/2">
            <label className="block dark-text-gray-400">Price</label>
            <input
              type="number"
              name="price"
              defaultValue={singleData?.price}
              className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm w-1/2">
            <label className="block dark-text-gray-400">
              Food Added by (email)
            </label>
            <input
              required
              type="text"
              name="email"
              disabled
              defaultValue={singleData.email}
              className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            />
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="space-y-1 text-sm w-1/2">
            <label className="block dark-text-gray-400">
              Food Origin (Country)
            </label>
            <input
              required
              type="text"
              name="foodOrigin"
              defaultValue={singleData.foodOrigin}
              className="w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm w-1/2">
            <label className="block dark-text-gray-400">Chief name:</label>
            <input
              required
              type="text"
              name="chiefNames"
              defaultValue={singleData.chiefNames}
              className="w-full px-4 py-3 rounded-md dark-border-gray-700 focus:dark-border-violet-400"
            />
          </div>
        </div>

        <div className="space-y-1 text-sm">
          <label className="block dark-text-gray-400">
            Short Description of Food
          </label>
          <textarea
            required
            name="shortDescription"
            defaultValue={singleData.shortDescription}
            className="w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
          />
        </div>

        <button
          type="submit"
          className="block w-full p-3 text-center rounded-xl dark-text-gray-900 dark-bg-violet-400 btn btn-primary"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateFood;
