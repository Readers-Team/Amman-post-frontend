import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

import MenuItem from "./MenuItem";

export const menuItems = [
  {
    name: "Main Page",
    exact: true,
    to: "/",
    iconClassName: "bi bi-house",
},
{
  name: "About Us",
  exact: true,
  to: "/aboutus",
  iconClassName: "bi bi-people",
},
  {
    name: "Political",
    exact: true,
    to: "/political",
    iconClassName: "bi bi-flag",
},
{
    name: "Arts",
    exact: true,
    to: "/art",
    iconClassName: "bi bi-music-note-list",
},
{
    name: "Education",
    exact: true,
    to: "/education",
    iconClassName: "bi bi-book",
},
{
    name: "Sports",
    exact: true,
    to: "/sports",
    iconClassName: "bi bi-life-preserver",
},
{
    name: "Business",
    exact: true,
    to: "/business",
    iconClassName: "bi bi-briefcase",
},
{
    name: "Crime",
    exact: true,
    to: "/crime",
    iconClassName: "bi bi-headset-vr",
},
{
    name: "Health",
    exact: true,
    to: "/health",
    iconClassName: "bi bi-bookmark-heart",
},
{
    name: "Celebrity",
    exact: true,
    to: "/celebrity",
    iconClassName: "bi bi-star-half",
},
{
    name: "Weather",
    exact: true,
    to: "/weather",
    iconClassName: "bi bi-cloud-drizzle",
}
// ,
// {
//   name: "About Us",
//   exact: true,
//   to: "/aboutus",
//   iconClassName: "bi bi-people",
// }

  
  ];


const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

 
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="webscript" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>
{/* 
      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div> */}
<br/>
      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}

        </ul>
      </div>

      <div className="side-menu-footer">
                {/* <li>
                    <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-plus-circle-fill"></i>
                        </div>
                        <span>Add news</span>
                    </a>
                </li> */}


       </div>
    </div>
  );
};

export default SideMenu;
