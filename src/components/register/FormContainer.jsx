function FormContainer(props) {
  return (
    <>
      <h1 className="text-center bg-cor0 text-white py-6 w-115 mx-auto text-3xl rounded-b-none rounded-t-3xl mb-0 mt-5">
        {props.title}
      </h1>
      <div className="my-5 mt-0 mx-auto w-115 rounded-3xl rounded-t-none overflow-hidden border-1 border-cor0">
        {props.children}
      </div>
    </>
  );
}

export default FormContainer;
