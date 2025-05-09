function Main(props) {
  return (
    <div className="ml-23 mt-2 mr-5 mb-5 rounded-2xl shadow-sm/30 p-3.5 box-border flex-1 min-h-screen">
      {props.children}
    </div>
  );
}

export default Main;
