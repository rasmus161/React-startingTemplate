export function Footer({ children, className = "" }) {
  return (
    <footer
      className={`mt-auto flex min-h-[150px] items-center justify-center text-center ${className} `}
    >
      {children}
    </footer>
  );
}
