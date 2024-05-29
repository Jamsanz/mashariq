import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'outlined' | 'underlined' | 'default' | 'full-width';
}

const Button: React.FC<IButton> = ({ className, ...props }) => {
  return (
    <button
      className={`text-center font-[500] py-3 text-black ${
        props.disabled ? 'bg-[#8F999F]' : 'bg-white hover:text-white hover:bg-[#11469A] active:bg-[#073885]'
      } rounded-lg px-[69px] ${className}`}
      {...props}
    ></button>
  );
};

export default Button;
