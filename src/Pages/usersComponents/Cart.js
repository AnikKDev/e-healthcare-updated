import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Cart = () => {
  const [quantityValue, setQuantityValue] = useState("");
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(
        `https://e-healthcare-server.onrender.com/api/v1/orders?customerEmail=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setCartList(data.data);
          console.log(data);
        });
    }
  }, [user]);
  // calculating total price
  let totalMedPrice = 0;
  for (const item of cartList) {
    // console.log(item.price)
    totalMedPrice += Number(item.totalPrice);
  }
  localStorage.setItem("totalPrice", totalMedPrice);
  useEffect(() => {
    setTotal(totalMedPrice);
  }, [totalMedPrice]);
  const handleUpdate = (id) => {
    const filteredMedicineWithId = cartList.find((item) => item._id === id);
    const updatedTotalPrice = +filteredMedicineWithId.price * +quantityValue;
    const updatedOrderQuantityAndPrice = {
      name: filteredMedicineWithId.name,
      total: updatedTotalPrice,
      quantity: quantityValue,
      id: id,
      // paid: false
    };

    fetch("https://e-healthcare-server.onrender.com/api/v1/orders", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedOrderQuantityAndPrice),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, updatedOrderQuantityAndPrice);
      });
  };
  const navigate = useNavigate();
  const handleAddPaid = () => {
    /*  const paid = { paid: false };
         fetch('https://e-healthcare-server.onrender.com/api/v1/orders', {
             method: "PATCH",
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(paid)
         })
             .then(res => res.json())
             .then(data => {
                 console.log(data, paid);
                 navigate('/checkout')
             }) */
    navigate("/checkout");
  };

  const handleDeleteOrder = (id) => {
    fetch(`https://e-healthcare-server.onrender.com/api/v1/orders/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
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
              <th>Total Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartList?.map((item) => (
              <tr>
                <th>{item._id}</th>
                <td>{item.name}</td>
                <td>{item.companyName}</td>
                <td>{item.price}</td>
                <td>
                  <input
                    defaultValue={1}
                    onChange={(e) => setQuantityValue(e.target.value)}
                    type="number"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </td>
                <td>{item.totalPrice ? item.totalPrice : item.price}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="btn btn-sm"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteOrder(item._id)}
                    className="btn btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th colspan="5" className="">
                Total
              </th>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="m-7">
        <button onClick={handleAddPaid} className="btn">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
