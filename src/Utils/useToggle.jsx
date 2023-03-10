import { useState } from 'react';
export default function useToggle(defaultValue) {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const toggleValue = (newValue) => {
    console.log(newValue);
    setCurrentValue((value) =>
      typeof newValue === 'boolean' ? newValue : !value,
    );
  };
  return [currentValue, toggleValue];
}
