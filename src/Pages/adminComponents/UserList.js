import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("https://e-healthcare-server.onrender.com/api/v1/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data.data));
  }, []);
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  return (
    <div className="mb-24">
      {/* breadcrumb */}
      <div className="text-sm breadcrumbs my-2 mx-16">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>User List</li>
        </ul>
        <div className="divider mt-1"></div>
      </div>

      <div className="bg-gray-800 text-white px-8 py-2">
        <h2 className="text-2xl">User List</h2>
      </div>

      {/* search container */}
      <div className="my-6 flex justify-end px-6">
        <input
          onChange={(e) => setSearchEmail(e.target.value)}
          value={searchEmail}
          type="text"
          placeholder="Search by Email"
          className="input input-bordered mx-2 w-full max-w-xs"
        />

        <button className="btn mx-2">Search</button>
        <button className="btn bg-white text-black hover:text-white mx-2">
          Reset
        </button>
      </div>

      {/* table */}

      <div className="overflow-x-auto mx-7">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              {/* <th>Name</th> */}
              <th>Email</th>
              {/* <th>Price</th>
                            <th>Quantity</th>
                            <th>Expire Date</th>
                            <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((item) => (
              <tr>
                <th>{item._id}</th>
                {/* <td>{item.name}</td> */}
                <td>{item.email}</td>
                {/* <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.expDate}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
