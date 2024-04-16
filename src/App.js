import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="flex h-full p-8">
      <div className="min-h-screen border-r border-dashed w-2/12">
        <Sidebar />
      </div>
      <div className="flex flex-col w-10/12 ml-10 relative">
        <div className="flex justify-end h-20 mb-10">
          <Header />
        </div>
        <Outlet />
        <div className="absolute bottom-0 w-full border-t-2 h-1/4">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
