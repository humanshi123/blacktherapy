"use client";
import Link from 'next/link';
import { useState } from 'react';
import { PhoneIcon, MailIcon } from '@/utils/svgicons';
import styled from 'styled-components';
import logo from "../assets/logo.png";
import Image from 'next/image';
import { LogoIcon } from '@/utils/svgicons';
interface NavMenuProps {
  isToggleOpen: boolean;
}

const StyledHeader = styled.header`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 20px 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav_logo {
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: #fab005;
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    font-size: 24px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    padding: 35px 20px;
    .menuToggleBtn {
      display: block;
    }
  }
`;

const NavMenu = styled.ul<NavMenuProps>`
  list-style: none;
  display: flex;
  gap: 40px;
  align-items: center;

  .nav-menu-list {
    text-decoration: none;
    display: block;
    font-size: 16px;
    line-height: normal;
    padding: 10px;
  }

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px;
    background: #ccc;
  }
`;

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  const handleToggleClose = () => {
    setIsToggleOpen(false);
  };

  const iconstyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "12px",
    color: "#fff",
  };

  return (
    <div>
        <div className=' px-[10px]'>
        <div className="announcement-bar mt-2.5 rounded-[27px] hidden md:flex justify-between items-center bg-[#283C63] px-[26px] py-[9px]">
        <div className="left-icons flex items-center gap-6">
          <div style={iconstyle}>
          <span><PhoneIcon /> </span>
          <p>
            (888) 383-6002
          </p>
          </div>
          <div style={iconstyle}>
           <span> <PhoneIcon /></span>
           <p>
            980-333-4063
          </p>
          </div>
          <div style={iconstyle}>
            <span><MailIcon /></span>
            <p>
            hello@theblacktherapynetwork.com
          </p>
          </div>
        </div>
        <div className="right flex items-center gap-6">
        <Link href="#" className="text-white text-xs">
        Login/Sign Up
            </Link>
        </div>
      </div>
        </div>
      <StyledHeader>
        <div className="nav_logo">
          <Link href="/" className="nav-logo-link">
            <LogoIcon />
            {/* <Image src={logo} alt="Logo" className="max-w-[165px]" /> */}
          </Link>
        </div>

        <NavMenu isToggleOpen={isToggleOpen}>
          <button className="float-right md:hidden text-[20px]" onClick={handleToggleClose}>
          <PhoneIcon />
          </button>
          <li>
            <Link href="/" className="nav-menu-list">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-menu-list">
              About
            </Link>
          </li>
          <li>
            <Link href="/therapistnetwork" className="nav-menu-list">
              Join Our Therapist Network
            </Link>
          </li>
          <li>
            <Link href="/faq" className="nav-menu-list">
              FAQ
            </Link>
          </li>
          <li className=''>
            <Link href="/contact" className="inline-block ext-sm text-white bg-slate-700 rounded-[30px] px-[30px] py-[13px]">
              Contact
            </Link>
          </li>
          <div className="relative block md:hidden">
            <Link href="/login" className="button">
              Login/Signup
            </Link>
          </div>
        </NavMenu>
        <p className="menuToggleBtn" onClick={handleToggleOpen}> 
        <PhoneIcon />
        </p>
      </StyledHeader>
    </div>
  );
};

export default Header;
