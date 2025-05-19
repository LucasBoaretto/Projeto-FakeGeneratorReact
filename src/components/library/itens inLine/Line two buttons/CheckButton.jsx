import { CheckIcon } from "lucide-react";

function CheckButton() {
  return (
    <button className="bg-green-500 rounded-lg px-2 py-2 cursor-pointer hover:shadow-sm/100">
      <CheckIcon color="white" size={30} strokeWidth={3}/>
    </button>
  );
}

export default CheckButton;
