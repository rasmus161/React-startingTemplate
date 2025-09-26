// putt components here like a default button all h1 p and so on elements as a collection

// section

export function Section({ children, className = "" }) {
  return (
    <section className={`mx-auto w-full ${className}`}>{children}</section>
  );
}

// container
export function Container({ children, className = "" }) {
  return (
    <div className={`mx-5 my-10 p-8 shadow-md ${className}`}>{children}</div>
  );
}

// headers text
