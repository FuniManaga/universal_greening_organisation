"use client";
import { useEffect, useState } from "react";

interface CountingNumbersProps {
  value: number;
  duration?: number;
  className?: string;
}

export const CountingNumbers = ({
  value,
  duration = 1000,
  className = "",
}: CountingNumbersProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateCount);
  }, [value, duration]);

  return <span className={className}>{count}</span>;
};
