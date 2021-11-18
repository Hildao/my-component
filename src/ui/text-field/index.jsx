import { useState } from 'react';

export default function TextField({
  type = 'text',
  placeholder,
  value,
  onChange = () => {},
  label,
}) {
  const [focus, setFocus] = useState(false);

  return (
    <div className='space-y-1'>
      <div>
        <label
          className={`font-bold ${focus ? 'text-purple-500' : ''}`}
        >
          {label}
        </label>
      </div>
      <input
        className='border-2 rounded border-gray-500 w-full py-2 px-4'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
}
