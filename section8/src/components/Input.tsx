import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  id: string;
  label: string;
  className?: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({
  id,
  label,
  className,
  ...otherProps
}: InputProps) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...otherProps} name={id} />
    </div>
  );
}
