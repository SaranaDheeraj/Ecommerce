import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Shop from "./pages/Shop";
import User from "./pages/User";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shopnow" element={<Shop />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
