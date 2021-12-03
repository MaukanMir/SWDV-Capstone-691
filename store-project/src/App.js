import Home from "./pages-folder/Home";
import ProductList from "./pages-folder/ProductList";
import Product from "./pages-folder/Product";
import Register from "./pages-folder/Register";
import Login from "./pages-folder/Login";
import Cart from "./pages-folder/Cart";
import Success from "./pages-folder/Success"
import { useSelector } from "react-redux";
import WishList from "./pages-folder/WishList";
import AccountInfo from "./pages-folder/AccountInfo";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate,
} from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user.currentUser);


  return (
    <Router>
  <Routes>
  <Route path ="/" element ={<Home/>}  /> 
   </Routes>
   <Routes>
  <Route path ="/products/:category" element ={<ProductList/>}  /> 
   </Routes>
   <Routes>
  <Route path ="/product/:id" element ={<Product/>}  /> 
   </Routes>
   <Routes>
  <Route path ="/cart" element ={<Cart/>}  /> 
   </Routes>

   <Routes>
  <Route path ="/success" element ={<Success/>}  /> 
   </Routes>

   <Routes> 
   <Route path ="/login" element ={ user ?  <Navigate to = "/"/> : <Login/>} >   </Route> 
   </Routes>



    <Routes>
    <Route path ="/register" element ={ user ?  <Navigate to = "/"/> :  <Register/>}  /> 
   </Routes>

   <Routes>
  <Route path ="/wishlist" element ={<WishList/>}  /> 
   </Routes>
    <Routes>
  <Route path ="/accountInfo" element ={<AccountInfo/>}  /> 
   </Routes>




    </Router>
  );
}

export default App;
