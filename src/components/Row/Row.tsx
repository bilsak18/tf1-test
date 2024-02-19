import { ReactNode } from "react";

export type RowProps = {
  children: ReactNode | ReactNode[];
};

export function Row({ children }: RowProps): JSX.Element {
  return <ul className="grid grid-flow-col gap-x-6">{children}</ul>;
}
