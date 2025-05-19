function DisabledButton(props) {
  return <button type="button" className="bg-green-900 text-xl text-white py-3 px-7.5 opacity-30 cursor-not-allowed rounded-xs">{props.children}</button>
}

export default DisabledButton;
