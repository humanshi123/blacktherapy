"use client";
import React from 'react';  
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ title, buttonText, buttonLink, imgSrc }) => {
    return (
        <div className="card-wrapper relative overflow-hidden">
             <Image src={imgSrc} alt="Card img" className='rounded-[23px] w-full'/>
                <div className="text-button ">
                <h5 className='text-[#13233B] text-[21px] pl-[50px]'>{title}</h5>
                <Link className='button !text-[14px]' href={buttonLink}> {buttonText}</Link>
                </div>
          
            </div>
    );
}

export default Card;
