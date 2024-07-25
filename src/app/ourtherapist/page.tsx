import BannerSection from '@/components/BannerSection';
import OurTherapist from '@/components/OurTherapist'
import TherapyCard from '@/components/TherapyCard'
import React from 'react'
import banner from "../../assets/images/banner-img1.png";

export default function page() {
  const breadcrumbs = [
    { label: "Home ", url: "/" },
    { label: "Our Therapist", url: "/ourtherapist" },
  ];
  const heading = "Our Therapist";
  const imageUrl = banner;
  return (
    <div>
       <BannerSection
        breadcrumbs={breadcrumbs}
        heading={heading}
        imageUrl={imageUrl}
      />
      <OurTherapist />
    </div>
  )
}
