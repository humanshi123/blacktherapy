"use client";
import React, { Component, useState } from 'react';
import EligibilityStep from './EligibilityStep';
import PersonalDetails from './PersonalDetails';
import InsuranceStep from './InsuranceStep';
import CertificationStep from './CertificationStep';
import MyProfileStep from './MyProfileStep';
import BackgroundStep from './BackgroundStep';
import ApplicationCompleted from './ApplicationCompleted';
import { WelcomeProcess } from './(therapist-onboarding)/WelcomeProcess';
import ApplicationProcess from './(therapist-onboarding)/ApplicationProcess';
import CompensationPay from './(therapist-onboarding)/CompensationPay';
import EmploymentStatus from './(therapist-onboarding)/EmploymentStatus';

const steps = [
  { component: WelcomeProcess, requiresValidation: false },
  { component: ApplicationProcess, requiresValidation: false },
  { Component: CompensationPay, requiresValidation: false},
  { component: PersonalDetails, requiresValidation: true },
  { component: CertificationStep, requiresValidation: true },
  { component: MyProfileStep, requiresValidation: true },
  { component: BackgroundStep, requiresValidation: true },
  { component: ApplicationCompleted, requiresValidation: false }
];

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    email: '',
    companyEmail: '',
    providerType: '',
  });
  const [isValid, setIsValid] = useState(false);

  const nextStep = () => {
    const step = steps[currentStep - 1];
    const requiresValidation = step.requiresValidation && !isValid;

    if (!requiresValidation || isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      alert('Please fill the required fields');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <WelcomeProcess requiresValidation={false} nextStep={nextStep} />;
      case 2:
        return <ApplicationProcess requiresValidation={false} nextStep={nextStep} />;
      case 3:
        return <CompensationPay requiresValidation={false} nextStep={nextStep} />;
      case 4:
        return (
          <PersonalDetails formData={formData} setFormData={setFormData} setIsValid={setIsValid}  nextStep={nextStep}/>
          //<CertificationStep formData={formData} setFormData={setFormData} setIsValid={setIsValid} nextStep={nextStep} />
        );
      case 5:
        return (
          <EmploymentStatus formData={formData} setFormData={setFormData} setIsValid={setIsValid} nextStep={nextStep}/>
          // <MyProfileStep
          //   formData={formData}
          //   setFormData={setFormData}
          //   setIsValid={setIsValid}
          //   nextStep={nextStep}
          // />
        );
      case 6:
        return (
          <BackgroundStep
            formData={formData}
            setFormData={setFormData}
            setIsValid={setIsValid}
            nextStep={nextStep}
          />
        );
      case 7:
        return <ApplicationCompleted />;
      default:
        return null;
    }
  };

  const buttonStyle = {
    background: '#CCE9FA',
    borderRadius: '7px',
    padding: '10px 20px',
    color: '#686C78',
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
        {currentStep < 7 && (
          <button className="button" onClick={nextStep} style={buttonStyle}>
            Next &gt;&gt;
          </button>
        )}
      </div>
      {renderStep()}
    </div>
  );
};

export default OnboardingForm;
