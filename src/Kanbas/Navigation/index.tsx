import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaClock,
  FaTv,
} from "react-icons/fa";
import {
  FaArrowRightFromBracket,
  FaInbox,
  FaRegCircleQuestion,
} from "react-icons/fa6";
function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="account fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "History", icon: <FaClock className="fs-2" /> },
    { label: "Studio", icon: <FaTv className="fs-2" /> },
    { label: "Commons", icon: <FaArrowRightFromBracket className="fs-2" /> },
    { label: "Help", icon: <FaRegCircleQuestion className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <div style={{ minWidth: "80px", width: "80px" }}>
      <ul className="wd-kanbas-navigation">
        {links.map((link, index) => (
          <li
            key={index}
            className={
              pathname.includes(link.label) ? "wd-active" : "wd-inactive"
            }
          >
            <Link to={`/Kanbas/${link.label}`}>
              {link.icon} {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;
