"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface Breadcrumb {
  label: string;
  url: string;
}
interface BannerSectionProps {
  breadcrumbs: Breadcrumb[];
  heading: string;
  imageUrl: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({ breadcrumbs, heading, imageUrl }) => {
  return (
    <div className="container mt-[50px]">
    <div className="relative ">
      <Image src={imageUrl} className="rounded-[20px] w-full"  alt={heading} /> 
      {/* <img className="object-cover w-full h-80 md:h-96" src={imageUrl} alt={heading} /> */}
      <div className="absolute inset-0 bg-opacity-50 bg-[#283C63] flex items-center justify-center rounded-[20px]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <nav className="sm:hidden" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index}>
                  <Link href={breadcrumb.url}>
                    <p className="text-white text-sm hover:text-gray-300">{breadcrumb.label}</p>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <div className="text-center ">
          <nav className="hidden sm:block" aria-label="Breadcrumb">
            <ol className="inline-flex bg-[#7FAEB5] py-2 rounded-[20px] px-5 items-center justify-center space-x-1">
                {breadcrumbs.map((breadcrumb, index) => (
                  <li key={index}>
                    <Link href={breadcrumb.url}>
                      <p className="text-white text-sm">{breadcrumb.label}</p>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
            <h1 className="mt-5 text-3xl md:text-[40px] leading-[48px] md:leading-[53px] text-white">{heading}</h1>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BannerSection;
