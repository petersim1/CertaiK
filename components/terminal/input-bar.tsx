import { cn } from "@/lib/utils";
import React from "react";

interface InputBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  disabled?: boolean;
  overrideLoading?: boolean;
}

const TerminalInputBar: React.FC<InputBarProps> = ({
  value,
  onChange,
  onSubmit,
  disabled,
  overrideLoading,
}) => {
  return (
    <form onSubmit={onSubmit} className="mt-4 flex items-center relative">
      <span className="text-green-400 mr-2">{">"}</span>
      <input
        autoFocus={true}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled || overrideLoading}
        className={cn(
          "flex-1 bg-transparent border-none outline-none",
          "text-white font-mono",
          "placeholder:text-gray-500",
          "caret-green-400",
          disabled && "cursor-not-allowed opacity-50",
        )}
        placeholder={!overrideLoading ? "Type your command..." : ""}
      />
      {overrideLoading && (
        <div className="absolute left-5 font-mono text-gray-500 pointer-events-none">
          <p>
            Loading
            <span className="animate-loading-dots inline-block overflow-x-hidden align-bottom">
              ...
            </span>
          </p>
        </div>
      )}
    </form>
  );
};

export default TerminalInputBar;