import { CheckIcon } from "lucide-react";

function CheckButton() {
  return (
    <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="blank">
      <button className="bg-green-500 rounded-lg px-2 py-2 cursor-pointer hover:shadow-sm/100">
        <CheckIcon color="white" size={30} strokeWidth={3} />
      </button>
    </a>
  );
}

export default CheckButton;
