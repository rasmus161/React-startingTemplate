// putt components here like a default button all h1 p and so on elements as a collection

// section

export function Section({ children, className = "" }) {
  return (
    <section className={`w-full mx-auto  ${className}`}>{children}</section>
  );
}

// container
export function Container({ children, className = "" }) {
  return (
    <div className={`my-10  p-8 shadow-md mx-5 ${className}`}>
      {children}
    </div>
  );
}

// headers text
