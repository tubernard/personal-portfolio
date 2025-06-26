export default function Page() {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
        Tal Bernard
      </h1>
      <h2 className="text-xl tracking-tighter">
        Software engineer +<br className="sm:hidden" /> solar industry
        professional
      </h2>
      <h2 className="mb-4 text-xl tracking-tighter">
        <span className="hidden sm:inline">based in Los Angeles</span>
        <span className="sm:hidden mt-">based in Los Angeles</span>
      </h2>
      <div className="relative w-full">
        <img
          src="/images/solar.jpg"
          alt="solar panels on roof"
          className="w-full rounded-lg filter grayscale-[0.5] contrast-110 brightness-95 mix-blend-multiply"
          style={{ zIndex: 1 }}
        />
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, rgba(0,212,255,0.13) 0%, rgba(2,0,36,0.08) 100%)",
            zIndex: 2,
          }}
        />
      </div>
      <div className="my-8"></div>
    </section>
  );
}
