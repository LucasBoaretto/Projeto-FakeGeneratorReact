function OtherTwoButton(props) {
  return (
    <button className="bg-gradient-to-b from-teal-500 to-purple-900 text-lg text-white px-12.5 py-2.5 rounded-[40px] shadow-lg/20 cursor-pointer">
      {props.children}
    </button>
  );
}

export default OtherTwoButton;
