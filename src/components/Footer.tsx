import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FooterCall, FooterMail, FooterMap, LogoIcon } from "@/utils/svgicons";
import footergif from "../assets/images/footer.gif"
interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <div className="main">
    <div className="relative z-[2] md:p-5">
            <div className="container rounded-[20px] bg-[#fff] shadow-xs">
            <div className="flex items-center justify-between py-[50px]">
            <div className="">
            <p className="capitalize text-blue_gray-900">Stay Connected</p>
            <p className="leading-7">Subscribe to get occasional emails from Rico. You can unsubscribe at any time and we won&#39;t
            share your info.</p>
            </div>
            <input type="text" />
            </div>
            </div>
    </div>
    <div className="relative mt-[-112px]  bg-[#232529] py-[26px] sm:py-5">
        <div className="container mt-[166px] md:p-5">
    <footer
      {...props}
      className={`${props.className} text-white flex`}
    >
        <div className="column-1 w-[50%]">
      <div className="max-w-[489px]">
       <div className="footer-logo mb-[30px]">
        <LogoIcon />
       </div>
        <p className="leading-7 text-[#686C78] text-sm mb-10">
          CARF International accreditation demonstrates a program&apos;s quality, transparency, and commitment to the
          satisfaction of the persons served. CARF International is an independent, nonprofit accreditor of health and
          human services.
        </p>
        <div className="grid gap-6">
          <div className="flex items-center gap-3">
            <div className="rounded-[24px] bg-blue_gray-900_01 px-3.5">
             <FooterCall/>
            </div>
            <div className="flex flex-1 flex-col items-start justify-center">
              <p className="text-[#8C8C8C] text-xs">
                Support Team
              </p>
              <p className="text-[#CACACA] text-sm">
                (888) 383-6002 – Phone <br /> 980-333-4063 – Fax
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-[48px] w-[48px] items-center justify-center self-center rounded-[24px] bg-blue_gray-900_01 px-3.5">
             <FooterMail />
            </div>
            <div className="">
              <p className="text-[#8C8C8C] text-xs">
                Email
              </p>
              <p className="text-[#CACACA] text-sm">
                hello@theblacktherapynetwork.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-[48px] w-[48px] items-center justify-center rounded-[24px] bg-blue_gray-900_01 px-3.5">
             <FooterMap />
            </div>
            <div className="flex flex-1 flex-col items-start">
              <p className="text-[#8C8C8C] text-xs">
                Mailing Address
              </p>
              <p className="leading-5 text-[#CACACA] text-sm">
                  The Ship Group Services , P.O. BOX 42915 ,<br />
                  Charlotte, North Carolina 28215
               
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="Column-22 footer-items w-[25%]">
        <h3 className="capitalize text-white text-lg mb-6"> Explore </h3>
        <ul className="flex flex-col items-start gap-5">
              <li>
                <Link href="#">
                    About us
                </Link>
              </li>
              <li>
                <Link href="#">
                    Book Appointment
                </Link>
              </li>
              <li>
                <Link href="#">
                
                    Letest News
                 
                </Link>
              </li>
              <li>
                <Link href="#">
                    Our Therapist
                </Link>
              </li>
              <li>
                <Link href="FAQ" target="_blank" rel="noreferrer">
                    FAQ
                </Link>
              </li>
              <li>
                <Link href="Contact" target="_blank" rel="noreferrer">
                 
                    Contact
                </Link>
              </li>
        </ul>
   
      </div>
      <div className="column-3 footer-items w-[25%]">
      <h3 className="capitalize text-white text-lg mb-6"> Support </h3>
        <ul className="flex flex-col items-start gap-5">
              <li>
                <Link href="#">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#">
                 Online Chat
                </Link>
              </li>
              <li>
                <Link href="Whatsapp" target="_blank" rel="noreferrer">
                  Whatsapp
                </Link>
              </li>
              <li>
                <Link href="Telegram" target="_blank" rel="noreferrer">
                  Telegram
                </Link>
              </li>
              <li>
                <Link href="Ticketing" target="_blank" rel="noreferrer">
                 Ticketing
                </Link>
              </li>
              <li>
                <Link href="#">
                  Call Center
                </Link>
              </li>
        </ul>
          <Image
          src={footergif}
          width={138}
          height={138}
          alt="Comp1one"
          className="h-[138px] w-[138px] self-end object-cover"
        />
      </div>
    </footer>
    </div>
    </div>
    </div>
  );
}
