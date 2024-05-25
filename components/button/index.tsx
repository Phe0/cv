interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button
      className={`
        hover:bg-violet hover:transition-colors hover:duration-200
        active:border-b-2 active:translate-y-[1px]
        border-2 border-b-4 border-black rounded-lg
        text-black text-base
        px-4 pt-1 pb-2
      `}
    >
      {children}
    </button>
  );
}
