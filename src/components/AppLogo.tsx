import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/logoo.jpeg" 
        alt="Logo"
        width={120}
        height={40}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
