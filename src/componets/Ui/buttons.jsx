export function Button({ onClick, children, className = "" }) {
  return (
    <button
      className={` ${className} my-2 rounded  px-4 py-2 font-semibold text-black focus:outline-none;
  `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
