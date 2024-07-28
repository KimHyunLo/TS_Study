import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

type IconButtonProps = {
  icon: ElementType;
  onClick: () => void;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export default function IconButton({
  icon: Icon,
  onClick,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button onClick={onClick} {...props}>
      <Icon />
      {children}
    </button>
  );
}
