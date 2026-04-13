type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`
        w-full
        mx-auto
        px-4 sm:px-6 lg:px-8
        max-w-[1400px]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
