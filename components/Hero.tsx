export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-placeholder.jpg')" }}
      />
      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="relative">
        <div className="section-shell flex min-h-[84vh] items-center py-16 sm:py-20">
          <div className="max-w-3xl text-white">
            <p className="section-kicker text-sage-100">Compassionate elderly care in Nepal</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              A Home Filled with Care, Dignity &amp; Love
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
              AUM Old Age Home offers a warm, respectful environment where elders receive daily
              support, companionship, and attentive care from a community that truly values them.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#about" className="primary-button bg-white text-ink hover:bg-sage-100">
                Learn More
              </a>
              <a href="#donate" className="secondary-button border-white/30 bg-white/10 text-white hover:bg-white/15">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}