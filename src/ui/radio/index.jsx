import { useState } from 'react';

export default function Radio({
  type = 'radio',
  checked,
  value,
  onChange = () => {},
  label,
}) {
  const [focus, setFocus] = useState(false);

  return (
    <div className='space-x-2'>
      <input
        type={type}
        checked={checked}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <label className={`${focus ? 'text-purple-500' : ''}`}>
        {label}
      </label>
    </div>
  );
}
