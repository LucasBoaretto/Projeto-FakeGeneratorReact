function AnimatedButton(props) {
  return (
    <button
      type="button"
      id="animatedButton"
    >
      <span>
        {props.children}
      </span>
    </button>
  );
}

export default AnimatedButton;
