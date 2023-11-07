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




  

  // const handleUpdateProfile = (e) => {
  //   e.preventDefault();

  //   const formData = {
  //     displayName: e.target.displayName.value,
  //     password: e.target.password.value,
  //     email: e.target.email.value,
  //     photoURL: e.target.photoURL.value,
  //     userOrderCount: e.target.userOrderCount.value,
  //   };
  //   console.log(formData);

  //   fetch(`http://localhost:5000/user/update/${dbuser?.uid}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return (
    <div>
      <div className="flex flex-col max-w-md p-6  mx-auto">
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
            uid:{user.uid}
          </span>
        </div>
      </div>

      {/* <div className="w-full ">
        <h2>Update profile </h2>
        <form onSubmit={} className="w-1/2 mx-auto">
          <div className="py-2">
            <span className="text-xl font-bold capitalize">name : </span>
            <input
              name="displayName"
              defaultValue={dbuser?.displayName}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>
          <div className="py-2">
            <span className="text-xl font-bold capitalize">email : </span>
            <input
              name="email"
              defaultValue={dbuser?.email}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>
          <div className="py-2">
            <span className="text-xl font-bold capitalize">photoURL : </span>
            <input
              name="photoURL"
              defaultValue={dbuser?.photoURL}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>
          <div className="py-2">
            <span className="text-xl font-bold capitalize">password : </span>
            <input
              name="password"
              defaultValue={dbuser?.password}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </div>
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
      </div> */}
    </div>
  );
};

export default Profile;
