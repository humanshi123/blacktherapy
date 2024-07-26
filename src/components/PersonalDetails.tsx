"use client";
import React, { useEffect } from "react";
import QuestionComponent from "./QuestionComponent";
import { ButtonSvg } from "@/utils/svgicons";

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
  useEffect(() => {
    validateStep();
  }, [formData]);

  const validateStep = () => {
    const isValid = personalDetailsQuestions.every(
      (q, index) => formData[`personal_${index}`] && formData[`personal_${index}`].trim() !== ""
    );
    setIsValid(isValid);
  };
  const handleContinue = () => {
    // Additional validation if needed
    nextStep();
  };
  return (
    <div className="form-main">
      <h2 className="section-title mb-7 md:m-0 text-center md:absolute top-[45px] left-[50%] md:translate-x-[-50%]">
      Personal Details
      </h2>
      <div className="bg-white rounded-[20px] p-5 md:p-[50px]">
      {/* <div className="custom">
      <input
        type="file"
        accept="image/*"
        className="file-input"
      />
       </div> */}

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
