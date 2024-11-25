const Marquee = ({ text, repeat }) => {
  // Create repeated text
  const repeatedText = Array(repeat).fill(text).join(' ———— '); // Adds a separator between repeats

  return (
    <div className='overflow-hidden whitespace-nowrap relative h-10'>
      <div
        className='absolute inline-block whitespace-nowrap text-lg animate-marquee-left font-semibold'
        style={{
          // The speed is controlled here. Adjust for faster/slower scrolling.
          animationDuration: `${5 + repeat * 4}s`,
        }}
      >
        {repeatedText}
      </div>
    </div>
  );
};

export default Marquee;
