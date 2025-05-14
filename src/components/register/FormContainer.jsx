function FormContainer(props) {
  return (
    <div className="my-5 mx-auto w-115 rounded-3xl overflow-hidden border-solid border-cor0 shadow-sm/80">
      {props.children}
    </div>
  );
}

export default FormContainer;
