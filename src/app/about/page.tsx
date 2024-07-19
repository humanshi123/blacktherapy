"use client";
import BannerSection from "@/components/BannerSection";
import React, { useState } from "react";
import Image from "next/image";
import AboutDropdown from "@/components/AboutDropdown"
import banner from "../../assets/images/banner-img1.png";
import about1 from "../../assets/images/img8.png";
import about2 from "../../assets/images/img9.png";
const Page: React.FC = () => {
  const breadcrumbs = [
    { label: "Home  /", url: "/" },
    { label: "About", url: "/about" },
  ];
  const heading = "Normalizing: Therapy in Black Community";
  const imageUrl = banner;

  return (
    <div>
      <BannerSection
        breadcrumbs={breadcrumbs}
        heading={heading}
        imageUrl={imageUrl}
      />
      <AboutFirst />
      <AboutSecond />
      <AboutDropdown />
    </div>
  );
};

export default Page;

const AboutFirst: React.FC = () => {
  return (
    <div className=" container py-[50px] md:py-[100px] ">
      <div className="grid items-center md:grid-cols-[minmax(0,_5fr)_minmax(0,_7fr)] ">
        <div>
          <Image src={about1} alt="about1" className="rounded-[20px] w-full" />
        </div>
        <div className="md:pl-[55px]">
          <h2 className="section-title mb-4">
            Welcome to the Black Therapy Network?
          </h2>
          <p className="text-base leading-7 text-gray-500">
            Welcome to the Black Therapy Network, a pioneering online therapy
            practice dedicated to serving the unique needs of the African
            American community. We understand that mental and emotional
            well-being are deeply intertwined with cultural identity and
            experiences. Our mission is to provide a platform where individuals,
            couples, and children can access high-quality therapy that is
            culturally sensitive, inclusive, and effective. Our team of
            experienced and compassionate therapists specializes in addressing a
            wide range of challenges faced by African Americans, from personal
            struggles to relationship dynamics. We believe that by embracing and
            celebrating cultural heritage, we can pave the way for meaningful
            healing and growth. At the Black Therapy Network, we are not just
            therapists – we are allies on your journey towards better mental
            health.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
const AboutSecond: React.FC = () => {
  return (
    <div className="container ">
      <div className="grid items-center md:grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] ">
        <div className="md:pr-[55px]">
          <h2 className="section-title mb-4">
            Culturally Sensitive Therapy for African Americans
          </h2>
          <p className="text-base leading-7 text-gray-500">
            Our commitment goes beyond therapy sessions; we strive to create a
            supportive community that encourages open dialogue, reduces stigma,
            and promotes self-care within the African American community. We
            understand the importance of convenience and confidentiality. Our
            secure online platform allows you to access therapy from the comfort
            of your own space, ensuring that seeking help is both accessible and
            private. Join us at the Black Therapy Network and embark on a
            transformative path towards emotional well-being, empowerment, and a
            brighter future, all while honoring the richness of African American
            culture and experiences. Your story matters, and we are here to
            support you every step of the way.
          </p>
        </div>
        <div className="">
          <Image src={about2} alt="about2" className="rounded-[20px] w-full" />
        </div>
      </div>
    </div>
  );
};
