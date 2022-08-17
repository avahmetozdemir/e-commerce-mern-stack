import Products from "./pages/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";

function App() {
  const user = false
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products/:category" element={<Products />}/>
      <Route path="/product/:id" element={<SingleProduct />}/>
      <Route path="/login" element={user ? <Navigate to='/'/> : <Login />}/>
      <Route path="/register" element={user ? <Navigate to='/'/> : <Register />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/success" element={<Success />}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
