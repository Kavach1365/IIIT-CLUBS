import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="flex">
      <div className=" border-r-gray-700 w-2/12 p-2">
        <Sidebar />
      </div>
      <div>
        <div className="">
          <Header />
        </div>
        <Outlet />
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
