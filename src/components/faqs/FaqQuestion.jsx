function FaqQuestion({ children, ...props }) {
  return (
    <div
      {...props}
      className="flex flex-row flex-nowrap justify-between pt-6 pb-4 font-semibold text-xl cursor-pointer"
    >
      {children}
    </div>
  );
}

export default FaqQuestion;
