"use client";

export const AnimatedGlobe = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        // className="w-72 h-72 animate-spin-slow opacity-20 text-white"
        className="w-72 h-72 animate-spin-slow opacity-60 text-purple drop-shadow-lg"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="256"
          cy="256"
          r="200"
          stroke="currentColor"
          strokeWidth="1"
        />
        <ellipse
          cx="256"
          cy="256"
          rx="200"
          ry="80"
          stroke="currentColor"
          strokeWidth="1"
        />
        <ellipse
          cx="256"
          cy="256"
          rx="200"
          ry="150"
          stroke="currentColor"
          strokeWidth="1"
        />
        <ellipse
          cx="256"
          cy="256"
          rx="200"
          ry="120"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="56"
          y1="256"
          x2="456"
          y2="256"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="256"
          y1="56"
          x2="256"
          y2="456"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M156,256 A100,200 0 1,1 356,256 A100,200 0 1,1 156,256"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};
