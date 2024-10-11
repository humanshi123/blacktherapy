"use client";
import React, { Component, useState } from "react";
import PersonalDetails from "./(therapist-onboarding)/PersonalDetails";
import ApplicationCompleted from "./ApplicationCompleted";
import { WelcomeProcess } from "./(therapist-onboarding)/WelcomeProcess";
import ApplicationProcess from "./(therapist-onboarding)/ApplicationProcess";
import CompensationPay from "./(therapist-onboarding)/CompensationPay";
import EmploymentStatus from "./(therapist-onboarding)/EmploymentStatus";
import EducationalStep from "./(therapist-onboarding)/EducationalStep";
import FormStepSeven from "./(therapist-onboarding)/FormStepSeven";
import References from "./(therapist-onboarding)/References";
import QualifiedStep from "./(therapist-onboarding)/QualifiedStep";
import BackgroundChecks from "./(therapist-onboarding)/BackgroundChecks";
import UploadDocuments from "./(therapist-onboarding)/UploadDocuments";
import DeclarationStep from "./(therapist-onboarding)/DeclarationStep";

const steps = [
  { component: WelcomeProcess, requiresValidation: false },
  { component: ApplicationProcess, requiresValidation: false },
  { Component: CompensationPay, requiresValidation: false },
  { component: PersonalDetails, requiresValidation: true },
  { component: EmploymentStatus, requiresValidation: true },
  { component: EducationalStep, requiresValidation: true },
  { component: FormStepSeven, requiresValidation: true },
  { component: References, requiresValidation: true },
  { component: QualifiedStep, requiresValidation: true},
  { component: BackgroundChecks, requiresValidation: true },
  { component: UploadDocuments, requiresValidation: true },
  { component: ApplicationCompleted, requiresValidation: false},
];

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    email: "",
    companyEmail: "",
    providerType: "",
  });

  const [referenceFormData, setReferenceFormData] = useState<{ [key: string]: string }[]>([
    { name: "", phone: "", email: "", company: "" },
  ]);

  const [isValid, setIsValid] = useState(false);

  const nextStep = () => {
    const step = steps[currentStep - 1];
    const requiresValidation = step.requiresValidation && !isValid;

    if (!requiresValidation || isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      alert("Please fill the required fields");
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      console.log("Going back a step");
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };
const submitForm =() => {
 console.log(formData, "form submitted!");
};
  const renderStep = () => {
  switch (currentStep) {
      case 1:
        return <WelcomeProcess requiresValidation={false} nextStep={nextStep} />
      case 2:
        return <ApplicationProcess requiresValidation={false} nextStep={nextStep} />
      case 3:
        return <CompensationPay requiresValidation={false} nextStep={nextStep} />
      case 4:
        return <PersonalDetails formData={formData} setFormData={setFormData} setIsValid={setIsValid} nextStep={nextStep} />
      case 5:
        return <EmploymentStatus formData={formData} setFormData={setFormData} setIsValid={setIsValid} nextStep={nextStep} />
      case 6:
        return <EducationalStep formData={formData} setFormData={setFormData} setIsValid={setIsValid} nextStep={nextStep} />
      case 7:
        return <FormStepSeven formData={formData} setFormData={setFormData} setIsValid={setIsValid} nextStep={nextStep}/>
      case 8:
        return <References formData={referenceFormData} setFormData={setReferenceFormData} setIsValid={setIsValid} nextStep={nextStep}/>
      case 9:
        return <QualifiedStep formData={formData} setFormData={setFormData} setIsValid={setIsValid} nextStep={nextStep}/>
      case 10:
        return <BackgroundChecks formData={formData} setFormData={setFormData} setIsValid={setIsValid} nextStep={nextStep}/>
      case 11:
        return <UploadDocuments formData={formData} setFormData={setFormData} setIsValid={setIsValid} nextStep={nextStep}/>
      case 12:
        return <DeclarationStep formData={formData} setFormData={setFormData} setIsValid={setIsValid} nextStep={nextStep} />;
      case 13 :
        return <ApplicationCompleted/>
      default:
        return null;
    }
  };

  const buttonStyle = {
    background: "#CCE9FA",
    borderRadius: "7px",
    padding: "10px 20px",
    color: "#686C78",
  };

  return (
    <div>
      <div className="navigation flex items-center justify-between mb-5 md:mb-8">
        {currentStep >= 1 && (
          <button
            disabled={currentStep === 1}
            className="button"
            onClick={prevStep}
            style={buttonStyle}
          >
            &lt;&lt; Previous
          </button>
        )}
        {currentStep < 12 && (
          <button className="button" onClick={nextStep} style={buttonStyle}>
            Next &gt;&gt;
          </button>
        )}
        { currentStep === 12 && (<button className="button" onClick={nextStep} style={buttonStyle}>Submit </button>)}
      </div>
      {renderStep()}
    </div>
  );
};

export default OnboardingForm;
