import React from 'react';
import clsx from 'clsx';

interface QuestionComponentProps {
  question: string;
  index: string | number; // Can be a string or a number
  total: number;
  type: string; // 'text', 'radio', 'select', etc.
  placeholder?: string;
  options?: string[]; // For 'radio' and 'select' types
  formData: { [key: string]: string };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  index,
  total,
  placeholder,
  options,
  type,
  formData,
  setFormData
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const indexString = index.toString();
  const isActive = formData[indexString] && formData[indexString].trim() !== '';

  const questionNumber = indexString.includes('_')
    ? parseInt(indexString.split('_')[1]) + 1
    : parseInt(indexString) + 1;

  return (
    <div>
      <div className="mb-4 md:mb-8 grid md:grid-cols-2 gap-3 md:gap-5 items-center">
        <div className="flex items-center gap-5 lg:gap-[50px]">
          <div
            className={clsx(
              "w-[45px] h-[45px] md:w-[65px] md:h-[65px] grid place-items-center rounded-full border-2 border-[#CCE9FA]",
              isActive ? "bg-[#283C63] text-white border-[#CCE9FA]" : "bg-[#FBFBFD] text-base text-[#3A3A3C]"
            )}
          >
            <p className='text-sm md:text-base'><span className='text-lg md:text-[33px]'>{questionNumber}</span>/{total}</p>
          </div>
          <label className="w-[calc(100%-65px)] md:w-[calc(100%-115px)] text-[#283c63] text-sm">{question}</label>
        </div>
        {type === 'radio' && options ? (
          <div className="flex items-center gap-5 md:gap-[50px] ">
            {options.map(option => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name={indexString}
                  value={option}
                  checked={formData[indexString] === option}
                  onChange={handleChange}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        ) : type === 'select' && options ? (
          <select
            name={indexString}
            value={formData[indexString] || ''}
            onChange={handleChange}
            className="w-full px-[18px] h-[45px] text-sm py-2 border border-[#dbe0eb] rounded-[20px] focus:outline-none focus:ring-1 focus:border-[#283C63]"
          >
            <option value="" disabled>{placeholder}</option>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={indexString}
            value={formData[indexString] || ''}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full px-[18px] h-[45px] text-sm py-2 border border-[#dbe0eb] rounded-[20px] focus:outline-none focus:ring-1 focus:border-[#283C63]"
          />
        )}
      </div>
    </div>
  );
};

export default QuestionComponent;
