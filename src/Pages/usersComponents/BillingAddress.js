import React, { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const BillingAddress = ({ setTotalPrice }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [cartlist, setCartList] = useState([]);
  console.log(user?.email);
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
  for (const item of cartlist) {
    // console.log(item.price)
    totalMedPrice += Number(item.price);
  }
  setTotalPrice(totalMedPrice);
  useEffect(() => {
    setTotal(totalMedPrice);
  }, [totalMedPrice]);
  // console.log(total)

  const onSubmit = async (data) => {
    const shipphingData = {
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      state: data.state,
      city: data.city,
      address1: data.address1,
      totalPrice: total,
      paid: false,
      address2: data.address2,
    };
    console.log(shipphingData);
    fetch(
      "https://e-healthcare-server.onrender.com/api/v1/checkout/add-checkout",
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(shipphingData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/payment");
          console.log(data);
        }
      });
  };
  return (
    <div className="">
      <div className="bg-gray-800 text-white px-8 py-2">
        <h2 className="text-2xl">Check Out</h2>
      </div>

      <div className="grid grid-cols-3 my-6 mx-9">
        <div className="col-span-2 ">
          {/* form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 p-10"
          >
            <div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  defaultValue={user?.displayName}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <span className="label-text text-error">
                  {errors.name?.type === "required" && "Name is required"}
                </span>
              </div>
            </div>
            <div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Mobile No</span>
                </label>
                <input
                  {...register("mobile", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <span className="label-text text-error">
                  {errors.mobile?.type === "required" && "Mobile is required"}
                </span>
              </div>
            </div>
            <div className="col-span-2 ">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  defaultValue={user?.email}
                  placeholder="Type here"
                  className="input input-bordered w-5/6"
                />
                <span className="label-text text-error">
                  {errors.email?.type === "required" && "Email is required"}
                </span>
              </div>
            </div>
            <div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">State</span>
                </label>
                <input
                  {...register("state", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <span className="label-text text-error">
                  {errors.state?.type === "required" && "State is required"}
                </span>
              </div>
            </div>
            <div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input
                  {...register("city", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <span className="label-text text-error">
                  {errors.state?.type === "required" && "City is required"}
                </span>
              </div>
            </div>
            <div className="col-span-2">
              <div className="form-control col-span-2 w-full ">
                <label className="label">
                  <span className="label-text">Address 1</span>
                </label>
                <textarea
                  {...register("address1", { required: true })}
                  className="textarea textarea-bordered w-5/6"
                  placeholder="Address 1"
                ></textarea>
                <span className="label-text text-error">
                  {errors.address1?.type === "required" &&
                    "Address is required"}
                </span>
              </div>
            </div>
            <div className="col-span-2">
              <div className="form-control col-span-2 w-full ">
                <label className="label">
                  <span className="label-text">Address 2</span>
                </label>
                <textarea
                  {...register("address2")}
                  className="textarea textarea-bordered w-5/6"
                  placeholder="Address 2"
                ></textarea>
                {/* <input type="text" placeholder="Type here" className="input input-bordered " /> */}
              </div>
            </div>

            <button className="btn my-6">Continue</button>
          </form>
        </div>
        <div className="">
          {/* item detail */}
          <div className="overflow-x-auto " style={{ maxHeight: "500px" }}>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cartlist?.map((item) => (
                  <tr>
                    {console.log(item)}
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.totalPrice}</td>
                  </tr>
                ))}
                <tr>
                  <th colspan="3" className="">
                    Total
                  </th>
                  <td>{localStorage.getItem("totalPrice")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;
