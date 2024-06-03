import Button from "./Button";
const Banner = () => {
  return (
    <section className='bg-[url(/banner.png)] pt-64 pb-60 relative z-10 after:absolute after:-z-10 after:top-0 after:left-0 after:h-full after:w-full after:bg-[rgba(106,98,197,0.7)]'>
      <div className='container'>
      <h1 className=" text-[#FAFAFE] font-bold text-[84px] text-center capitalize">
         YOU’RE UNIQUE.YOUR WEBSITE SHOULD BE TOO
      </h1>
      <p className=" text-center m-auto text-2xl font-normal text-[#E6E5F3] w-[700px] pt-5 py-4">
      A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. 
      </p>
      <div className="flex gap-7 m-auto justify-center">
        <Button title="get free quoto" />
        <Button title="Learn More" />
      </div>
      </div>
    </section>
  );
};

export default Banner;