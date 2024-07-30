"use client";
import React, {useState} from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import { ButtonSvg, LogoIcon } from "@/utils/svgicons";
import InputField from "@/components/InputField";
import Image from "next/image";
import animate from "../../assets/images/loginslide.png"

const Page: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return(
    <>
    <div className="container">
    <div className="grid md:grid-cols-2 gap-8 md:gap-3 lg:gap-0 lg:grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] items-center pt-6 pb-10">
      <div className="video lg:pr-[125px] overflow-hidden">
     <div className="scrolling md:h-[600px] h-[300px] lg:h-[800px]">
     <Image src={animate} alt="amnimate"  />
     <Image src={animate} alt="amnimate"  />
     </div>
      </div>
    <div>
    <p className="mb-5 md:mb-10 text-center"><span className="inline-block "> <LogoIcon /> </span></p>
    <div className="login rounded-[20px] bg-white">
      <h1 className="bg-[#283C63] text-center py-5 md:py-[32px] text-white text-lg md:text-3xl rounded-t-[20px]">Sign in To Your Account</h1>
      <div className="md:px-[35px] px-[15px] md:pt-10 md:pb-[27px] py-5">
      <InputField
        type="email"
        value={email}
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Link href="/forgotpassword" className="text-[#686c78] text-sm text-right inline-block w-full mb-4 md:mb-[30px]">Forgot Password</Link>
      <Link href="/onboarding" className="button w-full">Submit <ButtonSvg /></Link>  
      </div>
    </div>
      </div>
    </div>
    </div>
    </>
  ); 
};
export default Page; 