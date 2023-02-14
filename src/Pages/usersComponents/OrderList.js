import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const OrderList = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://e-healthcare-server.onrender.com/api/v1/orders/paid-orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllOrders(data.data);
      });
  }, []);
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
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {allOrders?.map((item) => (
              <tr>
                <th>{item._id}</th>
                <td>{item.name}</td>
                <td>{item.companyName}</td>
                <td>{item.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
