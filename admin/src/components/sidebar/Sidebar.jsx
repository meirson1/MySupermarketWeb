import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
} from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/stats" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/transactions" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            <Link to="/postfb" className="link">
              <li className="sidebarListItem">
                <FacebookIcon className="sidebarIcon" />
                Post in Facebook
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
