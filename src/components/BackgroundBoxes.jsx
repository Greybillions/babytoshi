const BackgroundBoxes = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pt-5'>
      <div className='grid grid-cols-3 justify-items-center md:grid-cols-10  gap-4 opacity-50'>
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className='w-20 h-20 bg-transparent border-2 border-gray-500 rounded-md animate-fade'
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
      {/* Fade-out overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#080b13] pointer-events-none'></div>
    </div>
  );
};

export default BackgroundBoxes;
