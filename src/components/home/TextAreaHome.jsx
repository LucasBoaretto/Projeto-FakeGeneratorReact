function TextAreaHome(props) {
  return (
    <textarea
      rows={12}
      readOnly
      className="font-WorkSans text-base font-light w-full rounded-none mt-3.75 resize-y outline-none p-1.25 cursor-default border bg-gray-100"
      placeholder="Resultado"
      value={props.value}
    ></textarea>
  );
}

export default TextAreaHome;
