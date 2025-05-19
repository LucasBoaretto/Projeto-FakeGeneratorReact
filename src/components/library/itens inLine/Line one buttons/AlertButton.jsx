import { TriangleAlertIcon } from "lucide-react";

function AlertButton(props) {
  return (
    <button
      type="button"
      className="bg-red-500 text-xl py-3 px-6 text-white shadow border-none rounded-lg flex flex-line flex-nowrap hover:bg-red-600"
    >
      {props.children}
      <TriangleAlertIcon color="#FFD43B" className="ml-1" />
    </button>
  );
}

export default AlertButton;
