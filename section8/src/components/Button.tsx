import { ComponentPropsWithoutRef, type ReactNode } from "react";
import { NavLink } from "react-router-dom";

type ButtonType = ComponentPropsWithoutRef<"button">;

type LinkType = ComponentPropsWithoutRef<"a"> & {
  to: string;
};

function isLinkProps(props: ButtonType | LinkType): props is LinkType {
  return "to" in props;
}

type ButtonProps = {
  children: ReactNode;
  textonly: string;
} & (ButtonType | LinkType);

export default function Button(props: ButtonProps) {
  const { children, textonly } = props;

  if (isLinkProps(props)) {
    return (
      <NavLink
        className={`button ${textonly === "true" && "button--text-only"}`}
        to={props.to}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      className={`button ${textonly === "true" && "button--text-only"}`}
      {...props}
    >
      {children}
    </button>
  );
}
