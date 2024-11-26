import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { useState } from 'react';

const ToggleButton = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='border my-3 md:m-5 px-4 md:px-3 border-gray-400 bg-[#dff4ff] py-4'>
      <button
        onClick={toggleAnswer}
        className='flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 transition-all'
      >
        <span className='text-xl md:text-2xl font-bold'>{question}</span>
        {isOpen ? (
          <MdArrowDropUp className='text-2xl shrink-0 hover:text-blue-600' />
        ) : (
          <MdArrowDropDown className='text-2xl shrink-0 hover:text-blue-600' />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className='mt-2 pr-2 md:pr-4 text-gray-600 text-md font-semibold'>
          {answer}
        </p>
      </div>
    </div>
  );
};

export default ToggleButton;
