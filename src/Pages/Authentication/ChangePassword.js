import React from "react";
import { useAuthState, useUpdatePassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [updatePassword, updating, error] = useUpdatePassword(auth);
  const [user] = useAuthState(auth);
  const onSubmit = async (data) => {
    await updatePassword(data.password, user?.email);
    alert("Updated password");
    reset();
  };
  if (error) {
    console.log(error);
  }
  return (
    <div className=" flex justify-center lg:min-h-screen items-center">
      <div className="card w-full md:w-96 items-center shadow-2xl bg-base-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body w-full lg:w-96"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">New Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            <span className="label-text text-error">
              {errors.password?.type === "required" && "Password is required"}
            </span>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn ">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
