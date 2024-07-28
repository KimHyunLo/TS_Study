import { type ReactNode } from "react";

type CardProps = {
  title: string;
  actions: ReactNode;
  children: ReactNode;
};

function Card({ title, actions, children }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
      {actions}
    </div>
  );
}

export default Card;
