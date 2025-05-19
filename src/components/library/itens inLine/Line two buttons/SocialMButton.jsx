function SocialMButton(props) {
  return (
    <button className="flex flex-row py-2.5 px-5 rounded-4xl border border-gray-400 bg-transparent text-xl items-center cursor-pointer hover:shadow/70">
      {props.children}
    </button>
  );
}

export default SocialMButton;
