import { CircleHelpIcon } from "lucide-react";

function HelpButton() {
  return (
    <button className="cursor-pointer px-3 py-3 rounded-full hover:shadow/30">
      <CircleHelpIcon color="red" />
    </button>
  );
}

export default HelpButton;
