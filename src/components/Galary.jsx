import Counter from "./Counter";
const Galary = () => {
  return (
    <section className=" overflow-hidden bg-[#F9F9FB] relative">
      <div className="container">
        <div className="flex gap-[30px]">
          <div className=" w-1/4">
            <img src="/galary-1.png" alt="galary-1" className="w-full -mt-[105px]"/>
          </div>
          <div className=" w-1/4">
            <img src="/galary-2.png" alt="galary-2" className="w-full -mt-[133px]"/>
          </div>
          <div className=" w-1/4">
            <img src="/galary-3.png" alt="galary-3" className="w-full -mt-[18px]"/>
          </div>
          <div className=" w-1/4">
            <img src="/galary-4.png" alt="galary-4" className="w-full -mt-[99px]"/>
          </div>
        </div>
          <div className=" my-24 flex gap-[79px] counter">
            <Counter counterValue="10" counterLast="k" title="Projects Done"/>
            <Counter counterValue="53" counterLast="k" title="Happy client"/>
            <Counter counterValue="120" title="Gets Award"/>
            <Counter counterValue="16" title="Operated Years"/>
          </div>
          <div className=" absolute top-5 -right-[154px]">
            <img src="/galarybg.png" alt="galarybg" />
          </div>
      </div>
    </section>
  )
}

export default Galary;