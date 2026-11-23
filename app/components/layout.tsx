import type { CSSProperties, ElementType, ReactNode, Ref } from "react";

type Space = "none" | "hair" | "tight" | "line" | "block" | "section";
type StackProps = {
  as?: ElementType;
  direction?: "row" | "column";
  gap?: Space;
  pad?: Space;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: boolean;
  grow?: boolean;
  className?: string;
  children?: ReactNode;
  ref?: Ref<HTMLElement>;
} & Record<string, unknown>;

const token = (space: Space): string =>
  space === "none" ? "0" : `var(--space-${space})`;

export const Stack = ({
  as: Tag = "div",
  direction = "column",
  gap = "none",
  pad = "none",
  align,
  justify,
  wrap,
  grow,
  className,
  children,
  ...rest
}: StackProps) => (
  <Tag
    className={className}
    style={{
      display: "flex",
      flexDirection: direction,
      gap: token(gap),
      padding: token(pad),
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap ? "wrap" : undefined,
      flexGrow: grow ? 1 : undefined,
      minWidth: 0
    }}
    {...rest}
  >
    {children}
  </Tag>
);
