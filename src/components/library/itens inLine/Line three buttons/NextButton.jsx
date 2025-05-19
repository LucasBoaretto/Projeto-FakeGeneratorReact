import { MoveRightIcon } from "lucide-react";

function NextButton() {
  return (
    <button
      type="button"
      className="flex flex-row flex-nowrap items-center text-lg text-white bg-amber-600 border-2 border-solid border-amber-800 rounded-br-4xl rounded-tr-xs px-6 py-2 hover:bg-amber-700/90 cursor-pointer"
    >
      Next
      <MoveRightIcon className="ml-1.25" />
    </button>
  );
}

export default NextButton;
