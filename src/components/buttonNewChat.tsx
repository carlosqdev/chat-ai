import { PlusIcon } from "./icons";

export default function ButtonNewChat() {
  return (
    <button className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow">
      <PlusIcon />
      New chat
    </button>
  );
}
