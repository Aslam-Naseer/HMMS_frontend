import { BiSolidBowlRice, BiBookContent, BiSolidHome } from "react-icons/bi";
import {Link} from 'react-router-dom'
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
        <Link to='/home/mess'>
        <li>
          <BiSolidBowlRice /> Mess
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
