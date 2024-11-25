import React, { useState } from 'react';

const CopyTextBtn = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopyClick = () => {
    // Attempt to copy text to clipboard
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // If copy is successful, show success message
        setCopySuccess('Text copied successfully!');
        // Clear the success message after 2 seconds
        setTimeout(() => setCopySuccess(''), 2000);
      })
      .catch((err) => {
        // If an error occurs, show error message
        setCopySuccess('Failed to copy text.');
      });
  };

  return (
    <div className='flex flex-col items-center'>
      <p className='text-sm rounded-xl md:text-lg text-wrap mb-2 backdrop-blur-2xl border-[1px] p-2'>
        {text}
      </p>
      <button
        onClick={handleCopyClick}
        className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700'
      >
        Copy Text
      </button>
      {copySuccess && <p className='mt-2 text-green-500'>{copySuccess}</p>}
    </div>
  );
};

export default CopyTextBtn;
