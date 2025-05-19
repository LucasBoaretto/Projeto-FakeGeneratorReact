import { DownloadIcon } from "lucide-react";

function DownloadButton() {
  return (
    <button className="flex flex-row flex-nowrap items-center bg-cyan-300 text-white text-xl font-medium rounded-lg py-3 px-5 cursor-pointer hover:bg-cyan-400">
      <DownloadIcon className="mr-1.25" color="white" />
      Download
    </button>
  );
}

export default DownloadButton;
