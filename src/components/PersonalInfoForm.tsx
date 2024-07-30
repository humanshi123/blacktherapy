"use client"
import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  password: string;
  confirmPassword: string;
  email: string;
  city: string;
  location: string;
  zipCode: string;
  addressLine1: string;
  addressLine2: string;
}

const PersonalInfoForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    password: '',
    confirmPassword: '',
    email: '',
    city: '',
    location: '',
    zipCode: '',
    addressLine1: '',
    addressLine2: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField name="firstName" label="First Name" value={formData.firstName} onChange={handleChange} />
        <InputField name="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} />
        <InputField type="date" name="dateOfBirth" label="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} />
        <InputField name="phone" label="Phone" value={formData.phone} onChange={handleChange} />
        <InputField type="password" name="password" label="Password" value={formData.password} onChange={handleChange} />
        <InputField type="password" name="confirmPassword" label="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        <InputField type="email" name="email" label="Email" value={formData.email} onChange={handleChange} />
        <InputField name="city" label="City" value={formData.city} onChange={handleChange} />
        <SelectField name="location" label="Location" value={formData.location} onChange={handleChange} options={['Guam', 'Location2', 'Location3']} />
        <InputField name="zipCode" label="Zip Code" value={formData.zipCode} onChange={handleChange} />
        <InputField name="addressLine1" label="Address Line 1" value={formData.addressLine1} onChange={handleChange} />
        <InputField name="addressLine2" label="Address Line 2" value={formData.addressLine2} onChange={handleChange} />
      </div>
      <button type="submit" className="mt-4 button">Submit</button>
    </form>
  );
};

interface InputFieldProps {
  name: string;
  label: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, value, type = 'text', onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>
);

interface SelectFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const SelectField: React.FC<SelectFieldProps> = ({ name, label, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor={name}>{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    >
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default PersonalInfoForm;
