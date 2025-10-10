const LinkLoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative w-64 h-32">
        {/* Left circle */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2">
          <div className="w-12 h-12 rounded-full bg-primary animate-pulse" />
        </div>

        {/* Right circle */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2">
          <div className="w-12 h-12 rounded-full bg-primary animate-pulse animation-delay-300" />
        </div>

        {/* Connecting line animation */}
        <div className="absolute left-14 top-1/2 -translate-y-1/2 h-1 bg-primary origin-left animate-[scale-x_1.5s_ease-in-out_infinite]" 
             style={{ width: '152px' }} />

        {/* Text */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-sm font-medium text-foreground">Connecting you to providers...</p>
        </div>
      </div>

      <style>{`
        @keyframes scale-x {
          0%, 100% {
            transform: scaleX(0);
            opacity: 0.5;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default LinkLoadingAnimation;
