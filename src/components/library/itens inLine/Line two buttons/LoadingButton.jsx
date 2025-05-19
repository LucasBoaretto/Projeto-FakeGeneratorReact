import { LoaderCircleIcon } from "lucide-react";

function LoadingButton() {
  return (
    <button type="button" className="flex flex-line flex-nowrap items-center bg-green-400 text-xl text-white border border-transparent border-solid rounded-xl py-3 px-5 cursor-wait">
      <LoaderCircleIcon className="mr-1.25 animate-spin" color="white" strokeWidth={3} size={22}/>
      Loading
    </button>
  );
}

export default LoadingButton;
