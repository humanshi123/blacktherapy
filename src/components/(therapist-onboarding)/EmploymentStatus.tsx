"use client";
import React, { useEffect } from "react";
import QuestionComponent from "@/components/QuestionComponent";
import { ButtonSvg } from "@/utils/svgicons";
const EmploymentStatusQuestions = [
  {
    question: "What is your current employment status?",
    type: "radio",
    options: ["Employed", "Self-Employed", "Unemployed", "Student"],
  },
  {
    question: "Current or Previous Employer Name",
    type: "text",
  },
  {
    question: "City, State",
    type: "text",
  },
  {
    question: "Role/Postion",
    type: "text",
  },
  {
    question: "Rate of Pay",
    type: "number",
  },
  {
    question: "Start Date",
    type: "date",
  },
  {
    question: "End Date",
    type: "date",
  },
  {
    question: "Reason for Leaving",
    type: "text",
  },
  {
    question: "Supervisor's Name",
    type: "text",
  },
  {
    question: "Job Description",
    type: "text",
  },
  {
    question: "Current Resume",
    type: "file",
  },
];

interface EmploymentStatusProps {
  formData: { [key: string]: string };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  setIsValid: (isValid: boolean) => void;
  nextStep: () => void;
}

const EmploymentStatus: React.FC<EmploymentStatusProps> = ({
  formData,
  setFormData,
  setIsValid,
  nextStep
}) => {
  const validateStep = () => {
    const isValid = EmploymentStatusQuestions.every(
      (q, index) => formData[`certification_${index}`] && formData[`certification_${index}`].trim() !== ""
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
      Certification
      </h2> 
      <div className="bg-white rounded-[20px] p-5 md:p-[50px]">
        {EmploymentStatusQuestions.map((q, index) => (
          <QuestionComponent
            key={index}
            question={q.question}
            index={`certification_${index}`}
            total={EmploymentStatusQuestions.length}
            type={q.type}
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
export default EmploymentStatus;
