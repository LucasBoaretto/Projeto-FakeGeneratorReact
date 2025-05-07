function NavItens(props) {
  return (
    <a className="text-white p-1 text-xl" {...props}>
      {props.children}
    </a>
  );
}

export default NavItens;
