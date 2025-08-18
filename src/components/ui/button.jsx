// src/components/ui/button.jsx
export function Button({ children, asChild, ...props }) {
    const Comp = asChild ? 'span' : 'button';
    return (
      <Comp
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        {...props}
      >
        {children}
      </Comp>
    );
  }