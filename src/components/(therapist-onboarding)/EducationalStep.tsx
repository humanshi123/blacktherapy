"use client";
import React, { useCallback, useEffect, useState } from "react";
import QuestionComponent from "../QuestionComponent";
import { ButtonSvg } from "@/utils/svgicons";

const EducationalQuestions = [
  {
    question: "Highest Level of Education Completed",
    type: "select",
    options: [
      "None",
      "High School/ GED",
      "College",
      "Graduate School",
      "Advanced Degree/ Professional School",
    ],
  },
  {
    question: "NAME OF SCHOOL",
    type: "text",
  },
  {
    question: "LOCATION (City and State)",
    type: "text",
  },
  {
    question: "MAJOR & DEGREE EARNED",
    type: "text",
    placeholder: "value",
  },
  {
    question: "Do you require supervision?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    question: "Licensure & Certification",
    type: "textarea",
  },
  {
    question: "Describe your skills",
    type: "textarea",
  },
  {
    question: "How many hours can you work weekly?",
    type: "number",
  },
  {
    question: "Employment desired",
    type: "select",
    options: ["Full-Time Only", "Part-Time Only", "Full or Part Time"],
    placeholder: "option",
  },
  {
    question: "Current Availability",
    type: "checkbox",
    options: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  },
];

interface EducationalProps {
  formData: { [key: string]: any }; // Allowing mixed types (string, array, etc.)
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
  setIsValid: (isValid: boolean) => void;
  nextStep: () => void;
}

const EducationalStep: React.FC<EducationalProps> = ({
  formData,
  setFormData,
  setIsValid,
  nextStep,
}) => {
  const validateStep = useCallback(() => {
    const isValid = EducationalQuestions.every((q, index) => {
      const value = formData[`education_${index}`]; // Use correct key format

      if (q.type === "checkbox") {
        return Array.isArray(value) && value.length > 0; // Ensure checkbox array has values
      }
      if (q.type === "select") {
        return value && value.trim() !== ""; // Ensure select option is chosen
      }
      return typeof value === "string" && value.trim() !== ""; // Check text, radio, textarea, number types
    });
    setIsValid(isValid);
  }, [formData, setIsValid]);

  useEffect(() => {
    validateStep();
  }, [validateStep]);

  const handleContinue = () => {
    // Validate the form before proceeding
    if (
      EducationalQuestions.every((q, index) => {
        const value = formData[`education_${index}`]; // Ensure keys are consistent
        if (q.type === "checkbox") {
          return Array.isArray(value) && value.length > 0;
        }
        return value && value.trim() !== "";
      })
    ) {
      nextStep(); // Proceed to the next step if all fields are valid
    } else {
      alert("Please fill all the required fields.");
    }
  };

  return (
    <div className="form-main">
      <h2 className="section-title mb-7 md:m-0 text-center md:absolute top-[45px] left-[50%] md:translate-x-[-50%]">
        Educational Details
      </h2>
      <div className="bg-white rounded-[20px] p-5 md:p-[50px]">
        {EducationalQuestions.map((q, index) => (
          <QuestionComponent
            key={index}
            question={q.question}
            index={`education_${index}`} // Consistent key for form data
            total={EducationalQuestions.length}
            type={q.type}
            placeholder={q.placeholder}
            options={q.options}
            formData={formData}
            setFormData={setFormData}
          />
        ))}

        <div className="flex justify-end mt-[50px]">
          <button onClick={handleContinue} className="button">
            Continue <ButtonSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationalStep;
