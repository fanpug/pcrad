const SquareButton = ({ innerText, lowerText, handleOnClick, buttonPressed = "-1" }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className={`flex items-center justify-center h-16 w-16 my-2 mx-auto bg-white hover:bg-[#f8abf8] focus:bg-[#E28EE2] border-[1.5px] border-black text-[#371E49] text-3xl font-bold rounded-xl transition-all duration-100 ease-linear shadow-md ${buttonPressed === innerText ? "bg-[#E28EE2]" : '' }`}
        onClick={() =>
          handleOnClick(innerText)
        }
      >
        {innerText}
      </button>
      <span className="text-center text-xs leading-[14px] w-10 -m-1">
        {lowerText}
      </span>
    </div>
  );
};

export default SquareButton;
