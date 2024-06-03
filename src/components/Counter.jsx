import CountUp from 'react-countup';
const Counter = ({counterValue, counterLast, title}) => {
  return (
    <div className=" w-3/12 text-center pr-8">
      <h2 className=" mb-6 font-extrabold text-[64px] text-brand">
        <CountUp end={counterValue}/>
        {counterLast}
        </h2>
      <p className=" font-bold text-4xl text-[#141135]">{title}</p>
    </div>
  );
};

export default Counter