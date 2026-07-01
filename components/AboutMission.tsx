import Image from 'next/image';

export function AboutMission() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="section-kicker">About Us</p>
          <h2 className="section-title mt-3">A compassionate home built around dignity</h2>
          <p className="mt-6 text-lg leading-8 text-ink/80">
            Our mission is to provide a peaceful and dependable place where older adults in Nepal
            feel safe, respected, and connected. We focus on personal attention, gentle routines,
            and an atmosphere that feels like family.
          </p>
          <p className="mt-4 text-lg leading-8 text-ink/80">
            From care support to meaningful companionship, every part of our home is designed to
            protect comfort, confidence, and wellbeing.
          </p>
          <a href="#services" className="mt-8 inline-flex text-base font-semibold text-sage-700 hover:text-sage-600">
            Read Our Story
          </a>
        </div>

        <div className="order-1 overflow-hidden rounded-[2rem] shadow-soft lg:order-2">
          <Image
            src="/about-placeholder.jpg"
            alt="Elderly care home atmosphere placeholder"
            width={900}
            height={920}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}