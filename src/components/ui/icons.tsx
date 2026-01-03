export const Icons = {
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(139, 92, 246)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(255, 159, 64)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="url(#grad1)" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="50"
        fontWeight="bold"
        fill="white"
      >
        RM
      </text>
    </svg>
  ),
};
