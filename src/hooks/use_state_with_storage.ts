import { useState } from 'react';

export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
  // const [値, 値をセットする関数] = useState<型>(初期値)
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init);

  // 値を返さない関数
  const setValueWithStorage = (nextValue: string): void => {
    setValue(nextValue);
    localStorage.setItem(key, nextValue);
  };

  return [value, setValueWithStorage];
};
