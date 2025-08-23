function ButtonHome(props) {
  return (
    <div>
      <button
        className="text-white bg-cor3 py-2 px-5 mb-0.5 rounded-xs shadow-2xs cursor-pointer font-WorkSans hover:bg-cor2"
        onClick={props.config}>
        {props.content}
      </button>
    </div>
  );
}

export default ButtonHome;
