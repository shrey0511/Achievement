// components/loading/Preloader.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 15000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <div className="relative w-50 h-30 animate-pulse">
          <Image
            src="https://i.ibb.co/7v0jGgQ/IMG-20240103-172921.webp"
            alt="Pride Image"
            width={150} 
            height={150}
            className="rounded-full"
          />
          <div className="ml-4 text-lg font-bold text-primary text-center">PRIDE FOREVER</div>
        </div>
      ) : (
        <div className="ml-4 text-lg font-bold text-primary">PRIDE FOREVER</div>
      )}
    </div>
  );
};

export default Preloader;
