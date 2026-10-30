export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#131a3a_0%,#070b1a_60%)]" />
      <div className="animate-drift-a absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-violet/30 blur-[120px]" />
      <div className="animate-drift-b absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-cyan/20 blur-[120px]" />
      <div className="animate-drift-c absolute bottom-[-12rem] left-1/4 h-[30rem] w-[30rem] rounded-full bg-pink/15 blur-[130px]" />
      <div className="dot-grid absolute inset-0" />
    </div>
  );
}
