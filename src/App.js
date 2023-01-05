
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Products/Home/Home';
import { Routes, Route } from 'react-router-dom';
import GetOne from './Component/Products/GetOne/GetOne';
import UserLogin from './Component/Userlogin/UserLogin';
import Categories from './Component/Categories/Categories';
import ShowCategories from './Component/Categories/ShowCategories';
import Cart from './Component/Products/Cart/Cart';

function App() {


  return (
    <>

      < Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/cart' element={< Cart />} />
        <Route path='/view' element={< GetOne />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/categories' element={< Categories />} />
        <Route path='/showcategories' element={< ShowCategories />} />
      </Routes>
    </>
  );
}

export default App;
