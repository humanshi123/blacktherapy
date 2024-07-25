"use client";
import React, { useEffect } from "react";
import QuestionComponent from "./QuestionComponent";

const insuranceQuestions = [
  {
    question: "Do you have independent Malpractice Insurance?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    question: "Insurance company name",
    type: "email",
    placeholder: "Name of insurance company",
  },
  {
    question: "Have you had a claim filed in the last 6 months?",
    type: "radio",
    options: ["Yes", "No"],
  },
];

interface InsuranceStepProps {
  formData: { [key: string]: string };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  setIsValid: (isValid: boolean) => void;
}

const InsuranceStep: React.FC<InsuranceStepProps> = ({
  formData,
  setFormData,
  setIsValid,
}) => {
  useEffect(() => {
    validateStep();
  }, [formData]);

  const validateStep = () => {
    const isValid = insuranceQuestions.every(
      (q, index) => formData[`insurance_${index}`] && formData[`insurance_${index}`].trim() !== ""
    );
    setIsValid(isValid);
  };

  return (
    <div className="form-main">
      <h2 className="section-title mb-7 md:m-0 text-center md:absolute top-[45px] left-[50%] md:translate-x-[-50%]">
      Malpractice Insurance
      </h2>
      <div className="bg-white rounded-[20px]  p-5 md:p-[50px]">
        {insuranceQuestions.map((q, index) => (
          <QuestionComponent
            key={index}
            question={q.question}
            index={`insurance_${index}`}
            total={insuranceQuestions.length}
            type={q.type}
            placeholder={q.placeholder}
            options={q.options}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
      </div>
    </div>
  );
};

export default InsuranceStep;
