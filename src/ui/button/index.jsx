export default function Button({
  children,
  onClick = () => {},
  className = '',
  block = false,
}) {
  return (
    <button
      className={`border-2 rounded border-gray-500 py-2 px-4 font-bold text-blue-400 ${className} ${
        block ? 'w-full' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
