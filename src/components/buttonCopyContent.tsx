import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "./icons";

interface PropsButtonCopyContent {
  content: string;
}

export default function ButtonCopyContent({ content }: PropsButtonCopyContent) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isCopied]);

  function handleClick() {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
  }

  return (
    <div>
      <button onClick={handleClick} aria-label="Copy content">
        {isCopied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  );
}
