import { Share2Icon } from "lucide-react";

function ShareButton() {
  return (
    <button className="flex flex-row flex-nowrap items-center bg-yellow-300 text-white text-xl px-3 py-1.25 rounded-sm cursor-pointer border-2 border-solid border-gray-200 hover:animate-pulse">
      <Share2Icon className="mr-1.25" />
      Share
    </button>
  );
}

export default ShareButton;
