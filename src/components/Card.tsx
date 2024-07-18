"use client";
import React from 'react';  
import Image, {StaticImageData } from 'next/image';
import Link from 'next/link';
interface CardProps {
    title: string;
    buttonText: string;
    buttonLink: string;
    imgSrc?: string | StaticImageData;
  }
  const Card: React.FC<CardProps> = ({ title, buttonText, buttonLink, imgSrc }) => {
    return (
        <div className="card-wrapper relative overflow-hidden">
             {imgSrc && <Image src={imgSrc} alt="Card img" className="rounded-[23px] w-full" />}
                <div className="text-button ">
                <h5 className='text-[#13233B] text-[21px] pl-[50px]'>{title}</h5>
                <Link className='button !text-[14px]' href={buttonLink}> {buttonText}</Link>
                </div>
          
            </div>
    );
}

export default Card;
