function LineDiv(props) {
  return (
    <div className="flex flex-row flex-wrap justify-around content-center p-7.5 border-black border-solid border-b-3">
      {props.children}
    </div>
  );
}

export default LineDiv;
