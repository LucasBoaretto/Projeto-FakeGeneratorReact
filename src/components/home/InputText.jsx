function InputText(props) {
  return (
    <input
      type="text"
      placeholder="Insira seu texto aqui"
      className="w-full text-1em p-1.25 border-b outline-none text-base font-WorkSans"
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
      maxLength={props.maxLength}
    />
  );
}

export default InputText;
