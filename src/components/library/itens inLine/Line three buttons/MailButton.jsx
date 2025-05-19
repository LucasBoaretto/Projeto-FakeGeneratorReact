import { MailsIcon } from "lucide-react";

function MailButton() {
  return (
    <button className="flex flex-row flex-nowrap items-center bg-cor0 text-xl py-3 px-5 text-white rounded-lg hover:bg-cor0/85 cursor-pointer">
      <MailsIcon className="mr-1.25" color="white" />
      Inbox
    </button>
  );
}

export default MailButton;
