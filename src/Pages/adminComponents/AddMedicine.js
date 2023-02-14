import React from "react";
import { useForm } from "react-hook-form";
const AddMedicine = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async ({ name, quantity, companyName, expDate, price }) => {
    const newMedicineData = {
      name,
      quantity,
      companyName,
      expDate,
      price,
    };
    fetch("https://e-healthcare-server.onrender.com/api/v1/medicine", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMedicineData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Medicine added successfully");
        }
        console.log(data);
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
              type="tel"
              placeholder="Price"
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.price?.type === "required" && "Price is required"}
            </span>
          </div>
          {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <select
                            {...register("gender", { required: true })}
                            className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Gender</option>
                            <option>Male</option>
                            <option>Female</option>


                        </select>
                        <span className="label-text text-error">{errors.phone?.type === 'required' && "phone is required"}</span>
                    </div> */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              {...register("quantity", { required: true })}
              type="text"
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
              placeholder="Expire Date"
              className="input input-bordered"
            />
            <span className="label-text text-error">
              {errors.expDate && "Expire Date is required"}
            </span>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn">
              Add Medicine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;
