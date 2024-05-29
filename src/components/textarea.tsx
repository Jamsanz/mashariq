import React, { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';

type TextAreaProps = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

const TextArea = ({ className, ...props }: TextAreaProps, _ref: React.LegacyRef<HTMLTextAreaElement>) => {
  return (
    <textarea
      className={`px-5 pt-3 pb-5 bg-white placeholder:text-slate-400 text-black rounded-lg w-full ${className}`}
      {...props}
      ref={_ref}
      rows={6}
      cols={10}
    />
  );
};

export default forwardRef<HTMLTextAreaElement, TextAreaProps>(TextArea);
