import { RefreshCwIcon } from "lucide-react";

function IconButton() {
  return (
    <button
      type="button"
      className="bg-yellow-300 px-5 py-5 flex items-center rounded-full cursor-pointer"
    >
      <RefreshCwIcon className="animate-spin" color="white" size={35} strokeWidth={3}/>
    </button>
  );
}

export default IconButton;
