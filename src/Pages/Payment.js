import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Payment = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [getUnPaidOrders, setGetUnPaidOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://e-healthcare-server.onrender.com/api/v1/orders?customerEmail=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("unpaid", data);
        setGetUnPaidOrders(data.data);
      });
  }, []);
  console.log(getUnPaidOrders);
  const idsArray = [];
  const filteredOrders = getUnPaidOrders.map((item) => idsArray.push(item._id));
  console.log(idsArray);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updateOrderPaid = {
      ids: idsArray,
      paid: true,
    };
    fetch("https://e-healthcare-server.onrender.com/api/v1/orders/paid", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateOrderPaid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(updateOrderPaid);
        if (data.success) {
          navigate("/transaction-page");
        }
      });
  };
  return (
    <div className="mx-16 my-10">
      <div className="collapse collapse-arrow border border-base-300 bg-base-100">
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-bold">By Card</div>
        <div className="collapse-content ">
          <form onSubmit={handleFormSubmit}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Card No</span>
              </label>
              <input
                required
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Month</span>
              </label>
              <input
                required
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Year</span>
              </label>
              <input
                required
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">CVV</span>
              </label>
              <input
                required
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="my-10">
              <button type="submit" className="btn">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="collapse collapse-arrow border border-base-300 bg-base-100">
        <input type="checkbox" className="peer" />
        <div className="collapse-title font-bold">By Check</div>
        <div className="collapse-content ">
          <form>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Card No</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Month</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Year</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">CVV</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
