export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="50" cy="50" r="15" fill="currentColor"/>
    </svg>
  )
}

