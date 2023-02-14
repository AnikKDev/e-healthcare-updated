import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MedicineListAdmin = () => {
  const [allMedicine, setAllMedicine] = useState([]);
  useEffect(() => {
    fetch("https://e-healthcare-server.onrender.com/api/v1/medicine")
      .then((res) => res.json())
      .then((data) => setAllMedicine(data.data));
  }, []);
  // console.log(allMedicine)
  const navigate = useNavigate();
  // search by name
  const [showData, setShowData] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleMedSearch = () => {
    const filteredData = allMedicine.filter((item) => {
      if (searchFilter === "") {
        return item;
      } else if (searchFilter) {
        console.log(searchFilter);
        setShowData(false);
        return item.name.toLowerCase().includes(searchFilter);
      }

      console.log(filteredData);
      return filteredData;
    });
    setFilteredData(filteredData);
    console.log(filteredData);
  };
  const handleClear = () => {
    setShowData(true);
    setSearchFilter("");
  };
  const [checkedValue, setCheckedValue] = useState([]);
  let checkedIdArray = [];
  const handleCheck = (id) => {
    // setCheckedValue(id);
    checkedIdArray.push(id);
    console.log(checkedIdArray);
  };

  const handleDeleteMeds = (id) => {
    fetch(`https://e-healthcare-server.onrender.com/api/v1/medicine/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          alert("Medicine deleted successfully");
        }
      });
  };
  return (
    <div className="mb-24">
      {/* breadcrumb */}
      <div className="text-sm breadcrumbs my-2 mx-16">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Medicine List</li>
        </ul>
        <div className="divider mt-1"></div>
      </div>

      <div className="bg-gray-800 text-white px-8 py-2">
        <h2 className="text-2xl">Medicine List</h2>
      </div>

      {/* search container */}
      <div className="my-6 flex justify-end px-6">
        <input
          onChange={(e) => setSearchFilter(e.target.value)}
          value={searchFilter}
          type="text"
          placeholder="Search by name"
          className="input input-bordered mx-2 w-full max-w-xs"
        />

        <button onClick={handleMedSearch} className="btn mx-2">
          Search
        </button>
        <button
          onClick={handleClear}
          className="btn bg-white text-black hover:text-white mx-2"
        >
          Reset
        </button>
      </div>

      {/* table */}

      <div className="overflow-x-auto mx-7">
        <table className="table w-full">
          <thead>
            <tr>
              {/* <th>Select</th> */}
              <th>ID</th>
              <th>Name</th>
              <th>Company Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Expire Date</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {showData
              ? allMedicine?.map((item) => (
                  <tr>
                    {/*  <th>
                                            <input onChange={() => handleCheck(item._id)} type="checkbox" value={item._id} className="checkbox" />
                                        </th> */}
                    <th>{item._id}</th>
                    <td>{item.name}</td>
                    <td>{item.companyName}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.expDate}</td>

                    <td>
                      <>
                        <button
                          onClick={() =>
                            navigate(`/update-medicine/${item._id}`)
                          }
                          className="btn btn-sm"
                        >
                          Edit
                        </button>
                      </>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteMeds(item._id)}
                        className="btn btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : filteredData?.map((item) => (
                  <tr>
                    <th>{item._id}</th>
                    <td>{item.name}</td>
                    <td>{item.companyName}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.expDate}</td>
                    <td>
                      <>
                        <button
                          onClick={() =>
                            navigate(`/update-medicine/${item._id}`)
                          }
                          className="btn btn-sm"
                        >
                          Edit
                        </button>
                      </>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteMeds(item._id)}
                        className="btn btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        <div>
          <button
            onClick={() => navigate("/add-medicine")}
            className="btn my-10"
          >
            Add Medicine
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineListAdmin;
