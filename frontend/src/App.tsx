import {Outlet} from "react-router-dom";

import Nav from "./components/Nav";
import { RecoilRoot } from "recoil";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
      <RecoilRoot>
        <Nav />
        <Outlet/>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shopnow" element={<Shop />} />
          <Route path="/user" element={<User />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes> */}
        <Footer />
      </RecoilRoot>
  );
}

export default App;
