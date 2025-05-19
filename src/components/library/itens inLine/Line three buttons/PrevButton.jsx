import { MoveLeftIcon } from "lucide-react";

function PrevButton() {
  return (
    <button className="flex flex-row flex-nowrap items-center text-lg bg-[linear-gradient(to_left,_rgb(90,90,250),_rgb(211,3,211),_rgb(247,90,90))] border-2 border-solid border-gray-300 px-6 py-2 rounded-bl-4xl rounded-tl-xs hover:bg-[linear-gradient(to_right,_rgb(90,90,250),_rgb(211,3,211),_rgb(247,90,90))] text-white cursor-pointer">
      <MoveLeftIcon className="mr-1.25"/>
      Prev
    </button>
  );
}

export default PrevButton;
