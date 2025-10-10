const LinkLoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-8">
        <svg width="280" height="120" viewBox="0 0 280 120" className="chain-link">
          {/* Left chain link */}
          <g className="left-link">
            <ellipse cx="60" cy="60" rx="35" ry="50" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" />
            <rect x="52" y="15" width="16" height="12" fill="hsl(var(--primary))" rx="2" />
            <rect x="52" y="93" width="16" height="12" fill="hsl(var(--primary))" rx="2" />
          </g>

          {/* Right chain link */}
          <g className="right-link">
            <ellipse cx="220" cy="60" rx="35" ry="50" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" />
            <rect x="212" y="15" width="16" height="12" fill="hsl(var(--primary))" rx="2" />
            <rect x="212" y="93" width="16" height="12" fill="hsl(var(--primary))" rx="2" />
          </g>

          {/* Middle connecting piece with animation */}
          <g className="connector-piece">
            <ellipse cx="140" cy="60" rx="45" ry="20" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" className="connector-animate" />
            <rect x="132" y="45" width="16" height="12" fill="hsl(var(--primary))" rx="2" className="connector-animate" />
            <rect x="132" y="63" width="16" height="12" fill="hsl(var(--primary))" rx="2" className="connector-animate" />
          </g>
        </svg>

        {/* Text */}
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">Connecting you to providers...</p>
        </div>
      </div>

      <style>{`
        .connector-animate {
          animation: pulse-glow 1.5s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
            filter: drop-shadow(0 0 2px hsl(var(--primary)));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 8px hsl(var(--primary)));
          }
        }

        .left-link, .right-link {
          animation: subtle-pulse 2s ease-in-out infinite;
        }

        .right-link {
          animation-delay: 0.3s;
        }

        @keyframes subtle-pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LinkLoadingAnimation;
