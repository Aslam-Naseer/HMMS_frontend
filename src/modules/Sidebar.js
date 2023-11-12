import { BiSolidBowlRice, BiBookContent, BiSolidHome } from "react-icons/bi";

const Sidebar = ({ showSidebar }) => {
  return (
    <div className={showSidebar ? "side-nav show-sidebar" : "side-nav"}>
      <ul>
        <li>
          <BiSolidHome /> Home
        </li>
        <li>
          <BiBookContent /> Menu
        </li>
        <li>
          <BiSolidBowlRice /> Mess
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
