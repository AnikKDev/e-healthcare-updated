import logo from './logo.svg';
import './App.css';
import Header from './Pages/SharedPages/Header';
import { Route, Routes } from 'react-router-dom';
import TopHeader from './Pages/SharedPages/TopHeader';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Authentication/Login';
import Registration from './Pages/Authentication/Registration';
import Cart from './Pages/usersComponents/Cart';
import OrderList from './Pages/usersComponents/OrderList';
import MedicineList from './Pages/usersComponents/MedicineList';
import BillingAddress from './Pages/usersComponents/BillingAddress';
import Payment from './Pages/Payment';
import { useState } from 'react';
import TransactionPage from './Pages/TransactionPage';
import UserList from './Pages/adminComponents/UserList';
import AddMedicine from './Pages/adminComponents/AddMedicine';
import MedicineListAdmin from './Pages/adminComponents/MedicineListAdmin';
import OrderListAdmin from './Pages/adminComponents/OrderListAdmin';
import UpdateMedicineForm from './Pages/adminComponents/UpdateMedicineForm';
import ChangePassword from './Pages/Authentication/ChangePassword';
function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div>
      <TopHeader />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Registration />} />

        {/* user specific routes */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-list" element={<OrderList />} />
        <Route path="/medicine-list" element={<MedicineList />} />
        <Route path="/checkout" element={<BillingAddress setTotalPrice={setTotalPrice} />} />
        <Route path="/transaction-page" element={<TransactionPage totalPrice={totalPrice} />} />
        <Route path="/payment" element={<Payment />} />
        {/* ============================================== */}

        {/* admin specific routes */}
        <Route path="/user-list" element={<UserList />} />
        <Route path="/add-medicine" element={<AddMedicine />} />
        <Route path="/order-list-admin" element={<OrderListAdmin />} />
        <Route path="/medicine-list-admin" element={<MedicineListAdmin />} />
        <Route path="/update-medicine/:id" element={<UpdateMedicineForm />} />
        {/* ====================================================== */}
        {/* common route */}

        <Route path='/change-password' element={<ChangePassword />} />

      </Routes>
    </div>
  );
}

export default App;
