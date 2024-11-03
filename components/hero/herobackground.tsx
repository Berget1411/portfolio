export default function HeroBackground() {
  return (
    <div className="absolute left-0 right-0 top-0 -z-10 h-[80vh] w-full bg-background bg-grid-black/[0.08] dark:bg-grid-white/[0.03]">
      <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)))]"></div>
    </div>
  );
}
