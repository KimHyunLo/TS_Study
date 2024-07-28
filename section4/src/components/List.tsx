import { ComponentPropsWithoutRef, ReactNode } from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

export default function List<C>({ items, renderItem }: ListProps<C>) {
  return <ul>{items.map(renderItem)}</ul>;
}
