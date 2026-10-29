type DisclosureBarProps = {
  children?: string;
};

export function DisclosureBar({
  children = "We may earn a commission from links on this page.",
}: DisclosureBarProps) {
  return (
    <p className="border border-line bg-surface px-space-3 py-space-2 text-sm leading-6 text-ink-muted">
      {children}
    </p>
  );
}
