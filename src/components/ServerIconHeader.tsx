import React from 'react';

interface ServerIconHeaderProps {
  src: string;
  alt: string;
}

const ServerIconHeader: React.FC<ServerIconHeaderProps> = ({ src, alt }) => {
  return (
    <div className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 border-4 border-black dark:border-amber-400 shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(251,191,36,0.5)] hover:scale-105 transition-transform duration-200">
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
};

export default ServerIconHeader;