const ChooseBox = ({title}) => {
  return (
    <div className="flex gap-[37px] relative h-36 w-[568px] hover:shadow-2xl rounded-xl bg-white transition-all mb-3">
    <div>
      <img className=" ml-7 pt-[50px]" src="/chooseEllipse-1.png" alt="chooseEllipse-1" />
      <img className="absolute top-[50px] left-10" src="/chooseEllipse-2.png" alt="chooseEllipse-2" />
    </div>
      <p className=" w-[319px] font-normal text-[#726E9E] text-lg font-secondary mt-[42px]">{title}</p>
  </div>

  );
};

export default ChooseBox