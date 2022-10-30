
import './App.css';
import Home from './Page/Home/Home';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import ShopAo from './Page/ShopAo/ShopAo';
import { Route, Routes } from 'react-router-dom'
import ShopQuan from './Page/ShopQuan/ShopQuan';
import ChiTietSP from './Page/ChiTietSP/ChiTietSP';
import Cart from './Page/Cart/Cart';
import Signup from './Page/Signup/Signup';

function App() {
  return (
    <div id = "main">
      <Header></Header>
    <Routes>
      <Route path="/" element={ <Home></Home>}></Route>
      <Route path="/shopao" element={ <ShopAo></ShopAo>}></Route>
      <Route path="/shopquan" element={ <ShopQuan></ShopQuan>}></Route>
      <Route path="/cart" element={ <Cart></Cart>}></Route>
      {/* <Route path="/signup" element={ <Signup></Signup>}></Route> */}

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
