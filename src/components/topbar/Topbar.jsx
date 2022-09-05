import "./topbar.css";
import {  NotificationsNone, Settings } from "@material-ui/icons";
import {NavLink} from "react-router-dom"

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">Malon</span>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            
              <NotificationsNone />
            <span className="topIconBadge">
              2
            </span>
          </div>
        
        <div className="topbarIconContainer">
            
          <NavLink to="/get-awarded-actor">Get awarded actor</NavLink>
          
        </div>
        <div className="topbarIconContainer">
            
            <Settings />
            <span className="topIconBadge">
            2
          </span>
        </div> 
      <img src=" https://source.unsplash.com/random" alt="topavatar" className="topavatar" />
        
       </div>
      </div>
    </div>
  );
}

export default Topbar;
