interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`px-6 md:px-10 lg:px-16 xl:px-20 ${className}`}>
      <hr
        className="border-0 h-px bg-sage/25 w-full max-w-[1400px] mx-auto"
        role="separator"
      />
    </div>
  );
}
