interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`px-8 lg:px-16 ${className}`}>
      <hr
        className="border-0 h-px bg-sage/25 w-full max-w-[1200px] mx-auto"
        role="separator"
      />
    </div>
  );
}
