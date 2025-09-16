
export function Footer({ children, className = "" }) {
  return (
    <footer
      className={`flex justify-center items-center  min-h-[150px] mt-auto text-center ${className} `}
    >
      {children}
    </footer>
  );
}
