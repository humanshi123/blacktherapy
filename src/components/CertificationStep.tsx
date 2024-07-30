"use client";
import React, { useEffect } from "react";
import QuestionComponent from "./QuestionComponent";
import { ButtonSvg } from "@/utils/svgicons";
const CertificationStepQuestions = [
  {
    question: "Licensure/Certification Issued Date",
    type: "date",
  },
  {
    question: "Licensure/Certification Expiration",
    type: "date",
  },
  {
    question: "PNPI number (If applicable,if not write N/A)",
    type: "number",
    placeholder: "+415868135",
  },
  {
    question: "Taxonomy code (If applicable,if not write N/A)",
    type: "number",
    placeholder: "+415868135",
  },
  {
    question: "Do you require supervision?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    question: "License type",
    type: "text",
    placeholder: "Select license type",
  },
  {
    question: "Licensure/Certification Number",
    type: "number",
    placeholder: "Enter number",
  },
  {
    question: "Licensure/Certification State",
    type: "text",
    placeholder: "State",
  },
  {
    question: "Which licensing board or agency issued your credentials?",
    type: "text",
    placeholder: "Zip Code",
  },
 {
    question: "Do you have a supervisor with a valid supervision agreement in place?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    question: "Please upload a copy of your Licensure/Certification:",
    type: "file",
    placeholder: "Choose file",
  },

];

interface CertificationStepProps {
  formData: { [key: string]: string };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  setIsValid: (isValid: boolean) => void;
  nextStep: () => void;
}

const CertificationStep: React.FC<CertificationStepProps> = ({
  formData,
  setFormData,
  setIsValid,
  nextStep
}) => {
  useEffect(() => {
    validateStep();
  }, [formData]);

  const validateStep = () => {
    const isValid = CertificationStepQuestions.every(
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
        {CertificationStepQuestions.map((q, index) => (
          <QuestionComponent
            key={index}
            question={q.question}
            index={`certification_${index}`}
            total={CertificationStepQuestions.length}
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

export default CertificationStep;
