import { PiAirplane } from "react-icons/pi";
import { GiLevelFourAdvanced } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header"></div>
        <div className="sidebar-search">
          <input type="text" placeholder="Search..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="sidebar-items">
          <span>
            <SidebarItem title="Vehicle 1" icon={<PiAirplane />} />
          </span>
          <span>
            <SidebarItem title="Vehicle 2" icon={<GiLevelFourAdvanced />} />
          </span>
          <span>
            <SidebarItem title="Vehicle 3" icon={<GiLevelFourAdvanced />} />
          </span>
          <span>
            <SidebarItem title="Vehicle 4" icon={<GiLevelFourAdvanced />} />
          </span>
          <span>
            <SidebarItem title="Vehicle 5" icon={<GiLevelFourAdvanced />} />
          </span>
          <span>
            <SidebarItem title="Vehicle 6" icon={<GiLevelFourAdvanced />} />
          </span>
          <span>
            <SidebarItem title="Vehicle 7" icon={<GiLevelFourAdvanced />} />
          </span>
          <span>
            <SidebarItem title="Vehicle 8" icon={<GiLevelFourAdvanced />} />
          </span>
          <span>
            <SidebarItem title="Vehicle 9" icon={<GiLevelFourAdvanced />} />
          </span>
          <span>
            <SidebarItem title="Vehicle 10" icon={<GiLevelFourAdvanced />} />
          </span>
          <span>
            <SidebarItem title="Vehicle 11" icon={<PiAirplane />} />
          </span>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ title, icon }) => {
  return (
    <div className="sidebar-item">
      {icon && <div className="sidebar-item-icon">{icon}</div>}
      <div className="sidebar-item-title">{title}</div>
    </div>
  );
};

export default Sidebar;
