"use client";
import { useState } from "react";
import { usePathname } from 'next/navigation'; 
import { DashboardIcon, Humbruger, Logo, LogOut, BillingIcon, PasswordIcon, PaymentHistoryIcon, PayRequestIcon, AssignIcon } from "@/utils/svgicons";

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
              <Link href="/therapist/dashboard">
                <Logo />
              </Link> 
            </div>
          )}
          <button onClick={toggleSidebar} className="hamburgerButton">
            <Humbruger />
          </button>
        </div> 
        <ul className="navList">
          <li className={isActive('/therapist/dashboard')}>
            <Link href="/therapist/dashboard">
              <DashboardIcon />
              {!isCollapsed && <span>Dashboard</span>}
            </Link>
          </li>
          <li className={isActive('/therapist/assignments')}>
          <Link href="/therapist/assignments">
              <AssignIcon/>
              {!isCollapsed && <span>Assignments</span>}
            </Link>
          </li>
          <li className={isActive('/therapist/payment-request')}>
            <Link href="/therapist/payment-request">
              <PayRequestIcon/>
              {!isCollapsed && <span>Payment Requests</span>}
            </Link>
          </li>
          <li className={isActive('/therapist/payment-history')}>
            <Link href="/therapist/payment-history">
            <PaymentHistoryIcon />
              {!isCollapsed && <span>Payment History</span>}
            </Link>
          </li>
          <li className={isActive('/therapist/profile')}>
            <Link href="/therapist/profile">
            <PasswordIcon/>
              {!isCollapsed && <span>Profile</span>}
            </Link>
          </li>
          <li className={isActive('/therapist/view-task')}>
            <Link href="/therapist/view-task">
            <BillingIcon />
              {!isCollapsed && <span>View Task</span>}
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
