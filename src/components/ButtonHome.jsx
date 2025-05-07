function ButtonHome(props) {
  return (
    <div>
      <button className="text-white bg-cor3 py-2 px-5 mb-0.5 rounded-xs shadow-2xs cursor-pointer font-WorkSans hover:bg-cor2">
        {props.children}
      </button>
    </div>
  );
}

export default ButtonHome;
