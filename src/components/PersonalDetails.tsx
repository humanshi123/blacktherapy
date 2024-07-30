"use client";
import React, { useEffect, useState } from "react";
import QuestionComponent from "./QuestionComponent";
import { ButtonSvg } from "@/utils/svgicons";
import previewImage from "../assets/images/img11.png"
import Image from "next/image";
import previmg2 from "../assets/images/previmg.png"
const personalDetailsQuestions = [
  {
    question: "First name",
    type: "text",
    placeholder: "John",
  },
  {
    question: "Last name",
    type: "text",
    placeholder: "Doe",
  },
  {
    question: "Phone number",
    type: "number",
    placeholder: "+415868135",
  },
  {
    question: "Gender",
    type: "radio",
    options: ["Male", "Female" ,"Other"],
  },
  {
    question: "Date of birth",
    type: "date",
    placeholder: "DD/MM/YY",
  },
  {
    question: "State",
    type: "select",
    options: ["option 1", "option 2", "option 3", "option 4" ],
    placeholder: "City",
  },
  {
    question: "Zip Code",
    type: "number",
    placeholder: "Zip Code",
  },
  {
    question: "Address Line 1",
    type: "text",
    placeholder: "Address Line",
  },
  {
    question: "Address Line 2",
    type: "text",
    placeholder: "Address Line",
  },
];

interface PersonalDetailsProps {
  formData: { [key: string]: string };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  setIsValid: (isValid: boolean) => void;
  nextStep: () => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  formData,
  setFormData,
  setIsValid,
  nextStep
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(formData.image || null);

  useEffect(() => {
    validateStep();
  }, [formData]);

  const validateStep = () => {
    const isValid = personalDetailsQuestions.every(
      (q, index) => formData[`personal_${index}`] && formData[`personal_${index}`].trim() !== ""
    ) && previewImage !== null;
    setIsValid(isValid);
  };

  const handleContinue = () => {
    // Additional validation if needed
    nextStep();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreviewImage(result);
        setFormData((prevData) => ({
          ...prevData,
          image: result,
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
    setFormData((prevData) => ({
      ...prevData,
      image: "",
    }));
  };

  return (
    <div className="form-main">
      <h2 className="section-title mb-7 md:m-0 text-center md:absolute top-[45px] left-[50%] md:translate-x-[-50%]">
      Personal Details
      </h2>
      <div className="bg-white rounded-[20px] p-5 md:p-[50px]">
      <div className="custom relative bg-[#CCE9FA] w-[236px] h-[236px] rounded-[20px] mb-[50px] ">
         <input
           className='absolute top-0 left-0 h-full w-full opacity-0'
              type="file"   
              accept="image/*"
              onChange={handleImageChange}
            />
        {previewImage ? (
          <div className=" relative h-full ">
            <Image src={previewImage} alt="Preview" layout="fill" className="rounded-[20px]" />
            <button
              type="button"
              className="absolute top-0 right-0 bg-[#283C63] text-[#fff] px-[6px] rounded-full"
              onClick={handleRemoveImage}
            >
              X
            </button>
          </div>
        ) : (
          <div className="grid place-items-center h-full w-full">
           <div>
           <Image src={previmg2} alt="upload" width={57} height={57} className="max-w-[57px] mx-auto" />
           <p className="text-[#283c63] text-sm mt-[40px] ">Upload Image</p>
           </div>
          </div>
        )}
        </div>
        {personalDetailsQuestions.map((q, index) => (
          <QuestionComponent
            key={index}
            question={q.question}
            index={`personal_${index}`}
            total={personalDetailsQuestions.length}
            type={q.type}
            placeholder={q.placeholder}
            options={q.options}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
        
        <div className="flex justify-end mt-[50px]">
        <button onClick={handleContinue} className="button">Continue <ButtonSvg /></button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
