import React, { useState } from "react";

interface CounterProps {
  label: string;
  subLabel?: string;
  icon?: React.ReactNode;
  onChange?: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  label,
  subLabel,
  icon,
  onChange,
}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newValue = count + 1;
    setCount(newValue);
    if (onChange) onChange(newValue);
  };

  const decrement = () => {
    if (count > 0) {
      const newValue = count - 1;
      setCount(newValue);
      if (onChange) onChange(newValue);
    }
  };

  return (
    <div className="flex items-center gap-5">
      {icon && <span>{icon}</span>}
      <label className="text-white text-base flex flex-col">
        <span>{label}</span>
        {subLabel && (
          <span className="text-[13px] text-[#909598] italic">{subLabel}</span>
        )}
      </label>
      <div className="flex items-center gap-[17px] bg-white px-4 py-3 rounded-[60px]">
        <button
          onClick={decrement}
          className="cursor-pointer text-[#898989] text-2xl border-[none]"
          aria-label={`Decrease ${label}`}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={increment}
          className="cursor-pointer text-[#898989] text-2xl border-[none]"
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
