import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = ({ className, ...props }: InputProps, ref: React.LegacyRef<HTMLInputElement>) => {
  return (
    <input
      className={`px-5 py-2.5 bg-white placeholder:text-slate-400 text-black rounded w-full ${className}`}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef<HTMLInputElement, InputProps>(Input);
