import React, { Component } from 'react'
import logo from "../assets/logo.png"
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'

const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);

    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo img" />
                </div>
                <div onClick={() => { setInactive(!inactive) }} className="toggle-menu-btn">
                    {inactive ? <i class="bi bi-arrow-right-circle-fill"></i>
                        : <i class="bi bi-arrow-left-circle-fill"></i>}
                </div>
            </div>
            <div className="search-controller">
                <button className="search-btn">
                    <i class="bi bi-search"></i>
                </button>

                <input type="text" placeholder="search" />
            </div>
            <div className="divider">
            </div>
            <div className="main-menu">
                <ul>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-flag-fill"></i>
                            </div>
                            <span>Political</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-music-note-list"></i>
                            </div>
                            <span>Arts</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-book"></i>
                            </div>
                            <span>Education</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-life-preserver"></i>
                            </div>
                            <span>Sports</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-briefcase"></i>
                            </div>
                            <span>Business</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-headset-vr"></i>
                            </div>
                            <span>Crime</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-file-medical"></i>
                            </div>
                            <span>health</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-star-half"></i>
                            </div>
                            <span>Celebrity</span>
                        </a>
                    </li>
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                                <i class="bi bi-cloud-drizzle"></i>
                            </div>
                            <span>Weather</span>
                        </a>
                    </li>

                </ul>

            </div>

            <div className="side-menu-footer">           
                    <li>
                        <a className="menu-item">
                            <div className="menu-icon">
                            <i class="bi bi-plus-circle-fill"></i>
                            </div>
                            <span>Add news</span>
                        </a>
                    </li>

               
            </div>
        </div>
    )

}

export default SideMenu
