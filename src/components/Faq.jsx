import { faqData } from '../constants';
import ToggleButton from './ToggleBtn';

const Faq = () => {
  return (
    <section
      id='faq'
      className='bg-n-1 mx-auto py-10 flex justify-center relative items-center w-full h-auto'
    >
      <div className='container w-[90%] md:w-[85%] p-4 md:p-10 bg-white my-20'>
        <div>
          <p className='uppercase text-lead'>fact about btoshi</p>
          <h2 className='text-3xl md:text-6xl font-bold text-[#0052ff]'>
            The Baby Face of Base
          </h2>
          <div className='flex mt-10 flex-col'>
            {faqData.map((item, index) => (
              <ToggleButton
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
