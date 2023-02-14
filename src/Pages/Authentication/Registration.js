import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
const Registration = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

    };
    if (token) {
        navigate('/')
    }
    return (
        <div className=" flex justify-center items-center">
            <div className="card w-full md:w-96 items-center shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full lg:w-96">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text" placeholder="name" className="input input-bordered" />
                        <span className="label-text text-error">{errors.email?.type === 'required' && "Name is required"}</span>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", { required: true })}
                            type="email" placeholder="email" className="input input-bordered" />
                        <span className="label-text text-error">{errors.email?.type === 'required' && "Email is required"}</span>
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            {...register("phone", { required: true })}
                            type="tel" placeholder="phone" className="input input-bordered" />
                        <span className="label-text text-error">{errors.phone?.type === 'required' && "phone is required"}</span>
                    </div> */}
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
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <textarea
                            {...register("address", { required: true })}
                            type="text" placeholder="address" className="textarea textarea-bordered" />
                        <span className="label-text text-error">{errors.address?.type === 'required' && "Address is required"}</span>
                    </div> */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", { required: true })}
                            type="password" placeholder="password" className="input input-bordered" />
                        <span className="label-text text-error">{errors.password && "Password is required"}</span>


                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn">Register</button>
                    </div>

                </form>


                {/* <label className="mt-2">
                    Already have an account? <Link to="/login" className="btn btn-link text-white underline px-0">Login</Link>
                </label> */}
            </div>
        </div>
    );
};

export default Registration;