import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [dbuser, setDbuser] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${user?.uid}`)
      .then((res) => {
        setDbuser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [user?.uid]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const formData = {
      userOrderCount: e.target.userOrderCount.value,
    };

    axios
      .put(`http://localhost:5000/user/update/${user?.uid}`, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  return (
    <div>
      <div className="flex flex-col max-w-md p-6 mx-auto">
        <img
          src={dbuser?.photoURL || user?.photoURL}
          alt=""
          className="flex-shrink-0 object-cover h-64 rounded-xl sm:h-96 dark:bg-gray-500 aspect-square"
        />
        <div>
          <h2 className="text-xl font-semibold">
            {user?.displayName || dbuser?.displayName}
          </h2>
          <span className="block pb-2 text-sm dark:text-gray-400">
            uid: {user?.uid}
          </span>
        </div>
      </div>

      <div className="w-full">
        <h2>Update profile </h2>
        <form onSubmit={handleUpdateProfile} className="w-1/2 mx-auto">
          <div className="py-2">
            <span className="text-xl font-bold capitalize">
              userOrderCount :
            </span>
            <input
              name="userOrderCount"
              defaultValue={dbuser?.userOrderCount}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>
          <button type="submit" className="btn btn-primary mx-auto">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
