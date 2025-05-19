function FadingButton(props) {
  return (
    <button className="text-xl bg-red-700 opacity-30 text-white py-3 px-7.5 cursor-pointer shadow-lg border-0 hover:opacity-100 hover:ease-linear hover:duration-150">
      {props.children}
    </button>
  );
}

export default FadingButton;
