export function Banner() {
  return (
    <div className="w-full overflow-hidden bg-background border-b">
      <div className="relative flex items-center whitespace-nowrap animate-marquee">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center mx-4 text-sm">
            <span className="font-medium">New season, New skills!</span>
            <span className="inline-flex items-center ml-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </span>
            <span className="ml-2 text-muted-foreground">All Courses at $9.99</span>
          </div>
        ))}
      </div>
    </div>
  )
}

