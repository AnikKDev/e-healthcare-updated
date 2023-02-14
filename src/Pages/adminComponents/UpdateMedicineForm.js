import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const UpdateMedicineForm = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [medicineDetail, setMedicineDetail] = useState({});
  useEffect(() => {
    fetch(`https://e-healthcare-server.onrender.com/api/v1/medicine/${id}`)
      .then((res) => res.json())
      .then((data) => setMedicineDetail(data.data));
  }, [id]);
  const { companyName, name, price, expDate, quantity } = medicineDetail;
  const onSubmit = async ({ name, quantity, companyName, expDate, price }) => {
    const updatedMedicineData = {
      name,
      quantity,
      companyName,
      expDate,
      price,
    };
    console.log(updatedMedicineData);
    fetch(`https://e-healthcare-server.onrender.com/api/v1/medicine/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMedicineData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Medicine Updated Successfully");
        }
      });
  };
  return (
    <div className=" flex justify-center items-center">
      <div className="card w-full md:w-96 items-center shadow-2xl bg-base-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body w-full lg:w-96"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="name"
              defaultValue={name}
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.email?.type === "required" && "Name is required"}
            </span>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              {...register("companyName", { required: true })}
              type="text"
              defaultValue={companyName}
              placeholder="Company Name"
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.companyName?.type === "required" &&
                "Company Name is required"}
            </span>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.price?.type === "required" && "Price is required"}
            </span>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              {...register("quantity", { required: true })}
              type="number"
              defaultValue={quantity}
              placeholder="Quantity"
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.quantity?.type === "required" && "Quantity is required"}
            </span>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Expire Date</span>
            </label>
            <input
              {...register("expDate", { required: true })}
              type="date"
              defaultValue={expDate}
              placeholder="Expire Date"
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.expDate && "Expire Date is required"}
            </span>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn">
              Update Medicine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMedicineForm;
