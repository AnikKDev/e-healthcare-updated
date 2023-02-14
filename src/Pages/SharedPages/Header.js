import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import useAdmin from '../../hooks/useAdmin';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const navigate = useNavigate();
    return (
        <div className="navbar bg-gray-600">
            <div className="flex-1">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/" className='text-white'>Home</Link></li>
                    {user && !admin ?
                        <>
                            <li><Link to="/medicine-list" className='text-white'>Medicine List</Link></li>
                            <li><Link to="/cart" className='text-white'>Cart</Link></li>
                            <li><Link to="/order-list" className='text-white'>Order List</Link></li>
                        </> : null
                    }
                    <li><Link to="/about-us" className='text-white'>About Us</Link></li>
                    <li><Link to="/contact-us" className='text-white'>Cotact Us</Link></li>
                    {
                        admin ?
                            <>
                                <li><Link to="/user-list" className='text-white'>User List</Link></li>
                                <li><Link to="/medicine-list-admin" className='text-white'>Medicine List</Link></li>
                                <li><Link to="/order-list-admin" className='text-white'>Order List</Link></li>
                            </>
                            :
                            null
                    }

                </ul>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    {
                        admin || user ? <li><button onClick={() => navigate('/change-password')} className='text-white btn mx-3'>Change Password</button></li> : null
                    }
                    {!user ?
                        <>
                            <li><Link to="/login" className='text-white btn mx-3'>Sign In</Link></li>
                            <li><Link to="/sign-up" className='text-white btn mx-3'>Sign Up</Link></li>
                        </>
                        :
                        <li><button onClick={() => signOut(auth)} className='text-white btn mx-3'>Logout</button></li>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Header;