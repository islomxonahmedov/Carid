import React, { useState } from 'react'
import navbar from "../Css/Navbar.module.css"
import { HiOutlineBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GoX } from "react-icons/go";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={navbar.container}>
      <div className={navbar.c_box1}>
        <HiOutlineBars3 className={navbar.bars} onClick={toggleSidebar} />
        <div>
          <img style={{ width: "150px" }} src="https://seeklogo.com/images/C/carid-logo-1E1411CCC2-seeklogo.com.png" alt="" />
        </div>
        <div className={navbar.inputlar}>
          <input type="text" placeholder='Search by Make Model Year, Product Type, Part Number, or Brand...' />
          <CiSearch className={navbar.search} />
        </div>
        <div className={navbar.iconlar}>
          <CiUser />
          <CiShoppingCart />
        </div>
      </div>
      <div className={navbar.c_box2}></div>
      {isOpen &&
        <div className={navbar.saidbarcontainer} onClick={toggleSidebar} >
          <div><GoX className={navbar.saidbarlogaut}/></div>
          <div className={isOpen ? `${navbar.sidebar} ${navbar.open}` : navbar.sidebar}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar