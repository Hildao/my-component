import { useState } from 'react';

export default function CheckBox({
  type = 'checkbox',
  checked,
  onChange = () => {},
  label,
}) {
  const [focus, setFocus] = useState(false);

  return (
    <div className='space-x-2 m-2'>
      <input
        type={type}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <label className={`text-sm ${focus ? 'text-purple-500' : ''}`}>
        {label}
      </label>
    </div>
  );
}
