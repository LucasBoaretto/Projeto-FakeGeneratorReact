function NavItensContainer(props) {
  return (
    <div className="flex items-center ml-2.5 px-0.75 cursor-pointer hover:bg-cor2 duration-150 hover:rounded-xs">
      {props.children}
    </div>
  );
}

export default NavItensContainer;
