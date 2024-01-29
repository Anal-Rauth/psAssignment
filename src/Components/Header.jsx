import React from "react";
import { FaFileAlt, FaCloudUploadAlt, FaChartBar } from "react-icons/fa";
import { MdOutlineWidgets } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="header-content">
        <div className="circle"> </div>
          <div className="header-item">
            <span><a href="#"><FaFileAlt /> File </a></span>
          </div>
          <div className="header-items">
            <div className="header-item">
              <a href="#"><MdOutlineWidgets/>Widgets</a>
            </div>
            <div className="header-item">
              <a href="#"><FaCloudUploadAlt/>Plan</a>
            </div>
            <div className="header-item">
              <a href="#"><FaChartBar /> Analyze </a>
            </div>
          </div>
          <div className="header-circles">
            <div className="header-circle"></div>
            <div className="header-circle"></div>
          </div>
          <div className="circle"> </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
