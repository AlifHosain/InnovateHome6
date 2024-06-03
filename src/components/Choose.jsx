import ChooseBox from "./ChooseBox";
const Choose = () => {
  return (
    <section className=" bg-[url(/choosebg.png)] bg-no-repeat">
      <div className="container">
        <div className="flex justify-between pt-[100px] pb-[106px]">
          <div>
            <ChooseBox title="We solve real-world problems through people and the web."/>
            <ChooseBox title="We make processes and technology work efficiently together."/>
            <ChooseBox title="We advance improve existing technology through research and development."/>
            <ChooseBox title="We develop long-lasting and scalable solutions, relationships partnerships."/>
          </div>
          <div>
            <h2 className=" font-bold text-[48px] text-primary mb-6">Why Choose Us</h2>
            <p className="w-[393px] font-secondary text-[#726E9E] text-[18px] mb-14">We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.</p>
            <button className="capitalize py-4 px-7 border-2 border-brand text-primary hover:text-[#F9F9F9] hover:bg-brand font-primary text-lg font-semibold rounded-full transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose