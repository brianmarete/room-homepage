import React from "react";
import clsx from "clsx";

interface HoverUnderlineLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Component(
  { href, children, className }: HoverUnderlineLinkProps = {
    href: "#",
    children: "Hover me",
  }
) {
  return (
    <a
      href={href}
      className={clsx(
        "relative inline-block text-primary transition-colors duration-200 hover:text-primary/80",
        "before:absolute before:left-0 before:-bottom-2 before:w-full before:h-0.5 before:bg-white",
        "before:origin-right before:scale-x-0 before:transition-transform before:duration-200",
        "hover:before:origin-center hover:before:scale-x-50",
        className
      )}
    >
      {children}
    </a>
  );
}
