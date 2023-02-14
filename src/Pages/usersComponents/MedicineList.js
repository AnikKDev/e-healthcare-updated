import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const MedicineList = () => {
  const [medicineList, setMedicineList] = useState({});
  const [searchName, setSearchName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [user] = useAuthState(auth);
  const handleClear = () => {
    setShowData(true);
    setSearchName("");
    setCompanyName("");
  };
  useEffect(() => {
    fetch("https://e-healthcare-server.onrender.com/api/v1/medicine")
      .then((res) => res.json())
      .then((data) => {
        setMedicineList(data);
      });
  }, []);
  const { data } = medicineList;
  const [searchedData, setSearchData] = useState([]);
  const [showData, setShowData] = useState(true);
  const handleMedSearch = () => {
    const filteredData = data.filter((item) => {
      if ((searchName || companyName) === "") {
        return item;
      } else if (searchName) {
        console.log(searchName);
        /* if(searchName.length === item.name.length){
                    
                } */
        setShowData(false);
        return item.name.toLowerCase().includes(searchName);
      } else if (companyName) {
        setShowData(false);
        console.log(item.companyName.includes(companyName));
        return item.companyName.toLowerCase().includes(companyName);
      }
      console.log(filteredData);
      return filteredData;
    });
    setSearchData(filteredData);
    console.log(searchedData);
  };

  const handleAddToCart = (id) => {
    // fetch('https://e-healthcare-server.onrender.com/api/v1/medicine')
    const filteredMedicineWithId = data.find((item) => item._id === id);
    const orderedMedicine = {
      name: filteredMedicineWithId.name,
      companyName: filteredMedicineWithId.companyName,
      price: filteredMedicineWithId.price,
      paid: false,
      quantity: 1,
      totalPrice: filteredMedicineWithId.price,
      customerEmail: user?.email,
    };
    fetch("https://e-healthcare-server.onrender.com/api/v1/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(orderedMedicine),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
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
          onChange={(e) => setSearchName(e.target.value)}
          value={searchName}
          type="text"
          placeholder="Search by name"
          className="input input-bordered mx-2 w-full max-w-xs"
        />

        <input
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName}
          type="text"
          placeholder="Search by company name"
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
              <th>ID</th>
              <th>Name</th>
              <th>Company Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Expire Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {showData
              ? data?.map((item) => (
                  <tr>
                    <th>{item._id}</th>
                    <td>{item.name}</td>
                    <td>{item.companyName}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.expDate}</td>
                    <td>
                      <button
                        onClick={() => handleAddToCart(item._id)}
                        className="btn btn-sm"
                      >
                        Add To Cart
                      </button>
                    </td>
                  </tr>
                ))
              : searchedData?.map((item) => (
                  <tr>
                    <th>{item._id}</th>
                    <td>{item.name}</td>
                    <td>{item.companyName}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.expDate}</td>
                    <td>
                      <button
                        onClick={() => handleAddToCart(item._id)}
                        className="btn btn-sm"
                      >
                        Add To Cart
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicineList;
