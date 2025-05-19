function OtherOneButton(props) {
  return (
    <button
      className="bg-black text-white text-lg rounded-[5px] py-2.5 px-12.5
        shadow-[inset_0_3px_5px_rgba(0,0,0,0.125),4px_4px_0px_0px_white,4px_4px_0px_1px_black]
        active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.125)]
        active:translate-x-[2px] active:translate-y-[2px]
        active:ease-linear active:duration-75 cursor-pointer"
    >
      {props.children}
    </button>
  );
}

export default OtherOneButton;
