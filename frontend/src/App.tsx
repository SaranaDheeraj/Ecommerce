import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import { RecoilRoot } from "recoil";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <RecoilRoot>
      <Nav />
      <Outlet />
      <Footer />
    </RecoilRoot>
  );
}

export default App;
