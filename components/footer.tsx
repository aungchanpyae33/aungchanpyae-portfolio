export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 max-w-5xl mx-auto">
      <div className="flex  items-center justify-center ">
        <span className="font-mono text-xs text-foreground-subtle">
          &copy; {new Date().getFullYear()} - Aung Chan Pyae(bubble)
        </span>
      </div>
    </footer>
  );
}
