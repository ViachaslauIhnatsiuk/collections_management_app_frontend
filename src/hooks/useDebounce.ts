import { useState } from 'react';

type Callback = (value: string) => void;
type Timer = ReturnType<typeof setTimeout>;

const useDebounce = (callback: Callback, delay: number) => {
  const [timer, setTimer] = useState<Timer>();

  const debouncedFunction = ((value) => {
    const newTimer = setTimeout(() => {
      callback(value);
    }, delay);
    clearTimeout(timer);
    setTimer(newTimer);
  }) as Callback;

  return debouncedFunction;
};

export { useDebounce };
