function FaqQuestion(props) {
  return (
    <div className="flex flex-row flex-nowrap justify-between pt-6 pb-4 font-semibold text-xl cursor-pointer">
      {props.children}
    </div>
  );
}

export default FaqQuestion;
