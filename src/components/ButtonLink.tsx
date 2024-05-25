import React from 'react';
import { LinkProps, Link } from 'react-router-dom';

const ButtonLink: React.FC<LinkProps> = ({ className, ...props }) => {
  return (
    <Link
      role="button"
      {...props}
      className={`px-6 lg:py-3 hover:bg-black font-medium hover:text-white w-fit border text-lg border-black rounded-full py-2 fold:text-xs inline-flex gap-2 justify-center items-center ${className}`}
    />
  );
};

export default ButtonLink;
