export function DonateCta() {
  return (
    <section id="donate" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="rounded-[2rem] bg-sage-gradient px-6 py-16 text-center text-white shadow-soft sm:px-10">
          <p className="section-kicker text-sage-100">Support Our Home</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Your support helps us provide comfort, care, and dignity
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Every contribution helps with meals, medicine, daily care, and a warm environment for
            elders who deserve safe and loving support.
          </p>
          <a href="#contact" className="mt-9 inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-sage-700 transition hover:bg-sage-50">
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
}