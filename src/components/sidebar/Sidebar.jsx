import {AccountCircle, AccountBox, Loyalty, Flag,LineStyle, TrendingUp,Timeline, NotInterested, AttachMoney, Assessment, Message, Send} from "@material-ui/icons";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          
            <h3 className="sidebartitle">Dashboard</h3>
          
          <ul className="sidebarlist">
            <li className="sidebarlistitem active">
              <LineStyle className="sidebaricon"/> Home
            </li>
            <li className="sidebarlistitem">
              <TrendingUp  className="sidebaricon"/> Analytics
            </li>
            <li className="sidebarlistitem">
              <Timeline className="sidebaricon"/> Sales
            </li>
          </ul>
        
            <h3 className="sidebartitle">Quick Menu</h3>
          
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <AccountCircle  className="sidebaricon"/> Users
            </li>
            <li className="sidebarlistitem">
              <Loyalty className="sidebaricon"/> Products
            </li>
            <li className="sidebarlistitem">
              <AttachMoney  className="sidebaricon"/> Transactions
            </li>
            <li className="sidebarlistitem">
              <LineStyle  className="sidebaricon"/> Reports
            </li>
          </ul>
          <h3 className="sidebartitle">Notifications </h3>
          
          <ul className="sidebarlist">
            <li className="sidebarlistitem active">
              <LineStyle className="sidebaricon"/> Mail
            </li>
            <li className="sidebarlistitem">
              <Send className="sidebaricon"/> Feedback
            </li>
            <li className="sidebarlistitem">
              <Message className="sidebaricon"/> Messages
            </li>
          </ul>
          <h3 className="sidebartitle">Staff</h3>
          
          <ul className="sidebarlist">
            <li className="sidebarlistitem active">
              <AccountBox className="sidebaricon"/> Manage
            </li>
            <li className="sidebarlistitem">
              <Assessment  className="sidebaricon"/> Analytics
            </li>
            <li className="sidebarlistitem">
              <Flag className="sidebaricon"/> Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
