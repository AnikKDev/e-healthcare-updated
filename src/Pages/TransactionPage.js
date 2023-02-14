import React, { useEffect, useState } from "react";

const TransactionPage = () => {
  // console.log(totalPrice)
  const totalPrice = localStorage.getItem("totalPrice");
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
      <div className="border-3 border-gray-500 mx-16 my-16">
        <div>
          <h3 className="text-3xl">Customer Information</h3>
          <div>
            <h5 className="text-xl">Alex</h5>
            <h5>email@email.com</h5>
          </div>
          <div>
            <h5>Card data</h5>
          </div>

          <hr />

          <div className="my-10">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {allOrders?.map((item) => (
                    <tr>
                      <th>{item._id}</th>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
