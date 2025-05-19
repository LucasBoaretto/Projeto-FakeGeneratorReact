function OutlineButton(props) {
  return (
    <button
      type="button"
      className="text-xl py-2.5 px-7.5 bg-transparent text-red-500 border border-solid border-red-500 rounded-sm cursor-pointer hover:bg-red-500 hover:text-white"
    >
      {props.children}
    </button>
  );
}

export default OutlineButton;
