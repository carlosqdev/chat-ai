import { IconExpand } from "./icons";

interface PropsButtonExpand {
  handleShowChatHistory: () => void;
}

export default function ButtonExpand({
  handleShowChatHistory,
}: PropsButtonExpand) {
  return (
    <button
      className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center"
      aria-label="Open sidebar"
      onClick={handleShowChatHistory}
    >
      <IconExpand />
    </button>
  );
}
