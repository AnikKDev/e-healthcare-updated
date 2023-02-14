import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className='mx-16'>
            {/* breadcrumb */}
            <div className="text-sm breadcrumbs my-2">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>About Us</li>
                </ul>
                <div className="divider mt-1"></div>
            </div>

            {/* contact us field */}
            <h1 className="text-4xl">Contact Us</h1>
            <div className='grid md:grid-cols-3 gap-4'>
                <div className='col-span-2'>
                    <form action="" >
                        <div className='flex flex-wrap lg:flex-nowrap'>
                            <div className='w-3/5'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">What is your name?</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">What is your name?</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">What is your name?</span>
                                    </label>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <div className="form-control w-2/3">
                                <label className="label">
                                    <span className="label-text">Your bio</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-60" placeholder="Bio"></textarea>
                            </div>
                        </div>
                        <button className="btn my-7">Send Message</button>
                    </form>
                </div>

                <div className='ml-6 w-3/4'>
                    <h3 className="text-3xl">
                        Our Office
                    </h3>
                    <div className='my-6'>
                        <h6 className="font-bold">Twitter Inc.</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <h6 className="font-bold mt-2">Full Name</h6>
                        <p>mail@email.com</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;