"use client";
import { useState } from "react";
import { usePathname } from 'next/navigation'; 
import { BillingInsuranceIcon, ChangePasswordIcon, DashboardIcon, Humbruger, Logo, LogOut, ProfileIcon, WellnessIcon } from "@/utils/svgicons";
import Link from "next/link";
import './SideNav.css'; 
import { useRouter } from "next/navigation";

const SideNav = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('https://blacktherapy.vercel.app/');
  };

  const [isCollapsed, setIsCollapsed] = useState(false);

  const pathname = usePathname(); 

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const isActive = (path: string) => pathname === path ? 'active' : '';

  return (
    <div className={`sideNav ${isCollapsed ? 'collapsed' : ''} h-[100%] overflo-custom`}>
      <div className="">
        <div className="header min-h-[46px] justify-between gap-[10px]">
          {!isCollapsed && (
            <div className="logoContainer">
              <Link href="/">
                <Logo />
              </Link>
            </div>
          )}
          <button onClick={toggleSidebar} className="hamburgerButton">
            <Humbruger />
          </button>
        </div>
        <ul className="navList">
          <li className={isActive('/')}>
            <Link href="/">
              <DashboardIcon />
              {!isCollapsed && <span>Dashboard</span>}
            </Link>
          </li>
          <li className={isActive('/wellness')}>
            <Link href="/wellness">
              <WellnessIcon />
              {!isCollapsed && <span>Wellness</span>}
            </Link>
          </li>
          <li className={isActive('/profile')}>
            <Link href="/profile">
              <ProfileIcon />
              {!isCollapsed && <span>Profile</span>}
            </Link>
          </li>
          <li className={isActive('/change-password')}>
            <Link href="/change-password">
              <ChangePasswordIcon />
              {!isCollapsed && <span>Change Password</span>}
            </Link>
          </li>
          <li className={isActive('/billing-insurance')}>
          <Link href="/billing-insurance">
              <BillingInsuranceIcon />
              {!isCollapsed && <span>Billing & Insurance</span>}
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="navList">
          <li className="!m-0">
            <a onClick={handleLogout} style={{ cursor: 'pointer' }}>
              <LogOut />
              {!isCollapsed && <span className="text-[#283C63] text-[600]">Log Out</span>}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
