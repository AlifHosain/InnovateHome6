 const Button = ({title}) => {
  return (
    <button className="capitalize py-4 px-7 border-2 border-brand text-white hover:bg-brand font-primary text-lg font-semibold rounded-full transition-all">
      {title}
    </button>
  );
};
export default Button;