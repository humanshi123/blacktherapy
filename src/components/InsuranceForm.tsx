import React, { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";

interface InsuranceFormProps {
  onBack: () => void;
}

const insuranceQuestions = [
  {
    question: "Find your insurance",
    type: "select",
    options: ["Basic", "Extended", "Premium"],
  },
  {
    question: "Member / Subscriber ID",
    type: "text",
    placeholder: "Enter value",
  },
  {
    question: "Subscriber first name",
    type: "text",
    placeholder: "Enter value",
  },
  {
    question: "Subscriber last name",
    type: "text",
    placeholder: "Enter value",
  },
  {
    question: "Date of Birth",
    type: "date",
    placeholder: "Enter any additional notes",
  },
  //mainform-----------
  {
    question: "To begin, tell us why you're looking for help today.",
    type: "radio",
    options: [
      "I'm feeling anxious or panicky",
      "I'm having difficulty in my relationship",
      "A traumatic experience [past or present]",
      "I'm navigating addiction or difficulty with substance abuse",
      "I'm feeling down or depressed.",
      "I'm dealing with stress at work or school",
      "Something else",
    ],
  },
  {
    question: "How would you rate your sleeping habits?",
    type: "radio",
    options: ["Excellent", "Good", "Fair", "Poor"],
  },
  {
    question: "How would you rate your current physical health?",
    type: "radio",
    options: ["Excellent", "Good", "Fair", "Poor"],
  },
  {
    question: "How did you here about us?",
    type: "radio",
    options: [
      "My doctor",
      "Serach Engine/Online",
      "Insurance provider",
      "Previous therapist",
      "Court",
      "Friend/Family",
      "Community Organization",
      "Media/Ad",
    ],
  },
  {
    question: "What gender do you identify with?",
    type: "radio",
    options: [
      "Male",
      "Female",
      "Transgender female",
      "Transgender male",
      "Gender queer",
      "Gender variant",
      "other",
      "Non Binary",
    ],
  },
  {
    question: "Briefly describe the main issues or concerns that bring you to therapy?",
    type: "textarea",
    placeholder: "",
  },

  // Add more questions as needed
];

const InsuranceForm: React.FC<InsuranceFormProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswerChange = (answer: string, index: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const renderQuestions = () => {
    let startIndex = 0;
    let endIndex = 0;
    if (currentStep === 0) {
      startIndex = 0;
      endIndex = 1;
    } else if (currentStep === 1) {
      startIndex = 1;
      endIndex = 5;
    } else if (currentStep === 2) {
      startIndex = 5;
      endIndex = 6;
    } else if (currentStep === 3) {
      startIndex = 6;
      endIndex = 8;
    } else if (currentStep === 4) {
      startIndex = 8;
      endIndex = 10;
    } else if (currentStep === 5) {
      startIndex = 10;
      endIndex = insuranceQuestions.length;
    }

    return insuranceQuestions
      .slice(startIndex, endIndex)
      .map((question, index) => (
        <div key={index + startIndex} className="grid mb-4">
          <label>{question.question}</label>
          {question.type === "textarea" ? (
            <textarea
              placeholder={question.placeholder}
              className="input"
              value={answers[index + startIndex] || ""}
              onChange={(e) =>
                handleAnswerChange(e.target.value, index + startIndex)
              }
            />
          ) : question.type === "select" ? (
            <select
              className="input"
              value={answers[index + startIndex] || ""}
              onChange={(e) =>
                handleAnswerChange(e.target.value, index + startIndex)
              }
            >
              <option value="">Select an option</option>
              {question.options?.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : question.type === "radio" ? (
            <div className="flex flex-col">
              {question.options?.map((option, i) => (
                <label key={i} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name={`radio_${index + startIndex}`}
                    value={option}
                    checked={answers[index + startIndex] === option}
                    onChange={() =>
                      handleAnswerChange(option, index + startIndex)
                    }
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          ) : (
            <input
              type={question.type}
              placeholder={question.placeholder}
              className="input"
              value={answers[index + startIndex] || ""}
              onChange={(e) =>
                handleAnswerChange(e.target.value, index + startIndex)
              }
            />
          )}
        </div>
      ));
  };

  return (
    <div className="max-w-[800px] mx-auto ">
      <h2 className="text-xl font-bold mb-4">Insurance Details</h2>
      {currentStep < Math.ceil(insuranceQuestions.length / 2) ? renderQuestions() : <PersonalInfoForm />}
      <div className="flex justify-between">
        <button onClick={handleBack} className="button">
          Back
        </button>
        {currentStep < Math.ceil(insuranceQuestions.length / 2) && (
          <button onClick={handleContinue} className="button">
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default InsuranceForm;