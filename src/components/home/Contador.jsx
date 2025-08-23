const maxValue = 100; 

function Contador({ inputValue = "" }) {
  const total = inputValue.length;

  let color = "green";
  if (total >= maxValue) {
    color = "red";
  } else if (total >= maxValue - 15) {
    color = "orange";
  }

  return (
    <p className="text-end w-full mb-7.5">
      <span style={{ color }}>{total}</span> / <span>{maxValue}</span>
    </p>
  );
}

export default Contador;
