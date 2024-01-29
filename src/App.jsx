import React, { useState } from "react";
import "./index.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import WORLDMap from "./Components/Map";
import DistanceSlider from "./components/DistanceSlider"; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex w-full h-full">
        <Sidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
        <div className="w-full h-full">
          <WORLDMap />
        </div>
      </div>
      {/* <DistanceSlider /> corrected component usage */}
    </div>
  );
}

export default App;
