import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Shop from "./pages/Shop";
import User from "./pages/User";
import Nav from "./components/Nav";
import { RecoilRoot } from "recoil";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shopnow" element={<Shop />} />
          <Route path="/user" element={<User />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
