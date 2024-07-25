"use client";
import React, { useState } from 'react';
import EligibilityStep from './EligibilityStep';
import PersonalDetails from './PersonalDetails';
import InsuranceStep from './InsuranceStep';

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    email: '',
    companyEmail: '',
    providerType: ''
  });
  const [isValid, setIsValid] = useState(false);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <EligibilityStep formData={formData} setFormData={setFormData} setIsValid={setIsValid} />;
      case 2:
        return <InsuranceStep formData={formData} setFormData={setFormData} setIsValid={setIsValid} />;
      case 3:
        return <PersonalDetails formData={formData} setFormData={setFormData} setIsValid={setIsValid} />;
      default:
        return null;
    }
  };

  const nextStep = () => {
    // disabled={(!isValid)}
    if (isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
    else{
        alert('Please fill the fields')
    }
  };

  const prevStep = () => {
    if(currentStep > 1){
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };
 const buttonstyle= {
    background: "#CCE9FA",
    borderRadius: "7px",
    padding: "10px 20px",
    color: "#686C78",
  };
  return (
    <div>
      <div className="navigation flex items-center justify-between mb-5 md:mb-8">
        {currentStep >= 1 && <button disabled={currentStep ===1} className='button' onClick={prevStep} style={buttonstyle}>&lt;&lt;Previous</button>}
        {currentStep < 3 && <button className='button' onClick={nextStep} style={buttonstyle}>Next&gt;&gt;</button>}
        {currentStep === 3 && <button onClick={() => alert('Form Submitted!')} >Submit</button>}
      </div>
      {/* <div className="steps">
        <span>{`Step ${currentStep}/3`}</span>
      </div> */}
      {renderStep()}
    </div>
  );
};

export default OnboardingForm;
