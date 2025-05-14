function Form(props) {
  return (
    <div>
      <form
        action="#"
        method="get"
        autoComplete="off"
        className="px-10 py-5 rounded-t-none rounded-b-2xl h-auto"
      >
        {props.children}
      </form>
    </div>
  );
}

export default Form;
