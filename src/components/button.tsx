import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const styles = {
  primary:
    "inline-flex min-h-11 items-center justify-center bg-accent px-5 text-[12px] font-medium uppercase tracking-[0.16em] text-paper transition-colors hover:bg-ink",
  secondary:
    "inline-flex min-h-11 items-center justify-center border border-accent bg-transparent px-5 text-[12px] font-medium uppercase tracking-[0.16em] text-accent transition-colors hover:bg-accent-soft",
} as const;

type Variant = keyof typeof styles;

type Shared = {
  children: ReactNode;
  variant?: Variant;
};

type LinkProps = Shared & {
  href: string;
};

type NativeProps = Shared & {
  href?: undefined;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick" | "disabled" | "aria-disabled">;

function isLink(props: LinkProps | NativeProps): props is LinkProps {
  return typeof props.href === "string";
}

export function Button(props: LinkProps | NativeProps) {
  const className = styles[props.variant ?? "primary"];

  if (isLink(props)) {
    const external = /^https?:\/\//.test(props.href);

    if (external) {
      return (
        <a
          className={className}
          href={props.href}
          target="_blank"
          rel="sponsored noopener noreferrer"
        >
          {props.children}
        </a>
      );
    }

    return (
      <Link className={className} href={props.href}>
        {props.children}
      </Link>
    );
  }

  const { children, type = "button", disabled, onClick } = props;

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      aria-disabled={props["aria-disabled"]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function ButtonPrimary(props: Omit<LinkProps, "variant"> | Omit<NativeProps, "variant">) {
  return <Button {...props} variant="primary" />;
}

export function ButtonSecondary(props: Omit<LinkProps, "variant"> | Omit<NativeProps, "variant">) {
  return <Button {...props} variant="secondary" />;
}
