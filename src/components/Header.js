//import React, { useState } from 'react';
import React from 'react';

import './Header.css';

import {
  //Collapse,
  Navbar,
  //NavbarToggler,
  NavbarBrand,
  //Nav,
  //NavItem,
  //NavLink,
  //UncontrolledDropdown,
  //DropdownToggle,
  //DropdownMenu,
  //DropdownItem,
  //NavbarText
} from 'reactstrap';

const Header = (props) => {
  //const [isOpen, setIsOpen] = useState(false);

  //const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar className="navbarcustom" light expand="md" >
        <NavbarBrand href="/">
          {/* <img alt="LSFOREVER" src= {logo} type='svg' className="icona" 
            style={{
              width:30,
              margin: 5
            }}
          /> */}
          <a href="https://lsben.github.io/zzzzz-m3u8-downloader-ts-to-mp4-release/" style={{color : "#ffffff" ,textDecoration : "none"}} >Zworld Inc</a> 
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Header;