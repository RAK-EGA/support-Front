import casesIcon from "../assets/casesIcon.png"
import logoutIcont from "../assets/Logout.png"
import darkmodeIcon from "../assets/darkmodeIcon.png"
import announcementsIcon from "../assets/anouncementsIcon.png"
import newsIcon from "../assets/newsIcon.png"
import usersIcon from "../assets/usersIcon.png"
import permitsIcon from "../assets/Permits.png"

import Toggle from 'react-toggle'
import "react-toggle/style.css"

import { Link, NavLink } from "react-router-dom"
export default function NavBar() {

    return (
        <div className="side--bar">

            <nav>
                <ul>
                    <li>
                        {/* <Link to={}/> */}
                        <NavLink
                            to={`tickets/`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            <img src={casesIcon} alt="cases Icon" /><span>Tickets</span>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`announcements/`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            <img src={announcementsIcon} alt="announcements Icon" /><span>Announcements</span>
                        </NavLink>

                    </li>
                    {/* News Out of project scope may delete later */}
                    {/* <li>
                        <NavLink
                            to={`News/`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            <img src={newsIcon} alt="news Icon" /><span>News</span>
                        </NavLink>
                    </li> */}
                    {/* moved responsibility to Admin/Service domain */}
                    {/* <li>
                        <NavLink
                            to={`users/`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            <img src={usersIcon} alt="users Icon" /><span>Users</span>
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink
                            to={`requests/`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            <img src={permitsIcon} alt="pernits Icon" /><span>Requests</span>
                        </NavLink>
                    </li>

                </ul>

            </nav>
            <div className="side--bottom">
                <div className="dark--mode">
                    <img src={darkmodeIcon} style={{
                        height: '43px',
                        width: '43px'
                    }} alt="" />
                    <label className="toggle--lable" htmlFor="toggle-1">
                        Dark Mode
                    </label>
                    <Toggle
                        name="toggle-1"
                        className="custom"
                        icons={{
                            checked: "On",
                            unchecked: "Off",
                        }}
                        onChange={e => console.log("onToggle", e.target.checked)}
                    />
                </div>

                <div >
                    <button className="logout--button">
                        <img src={logoutIcont} style={{
                            marginRight: "7px",
                        }} alt="logout Icon" />
                        Logout
                    </button>
                </div>

            </div>
        </div>

    );

}