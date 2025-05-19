function TextButton(props) {
  return (
    <button className="text-blue-400 rounded-lg px-5 py-2.5 text-2xl hover:bg-gray-200/40 cursor-pointer">
      {props.children}
    </button>
  );
}

export default TextButton;
