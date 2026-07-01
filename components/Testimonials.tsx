import Image from 'next/image';

const testimonials = [
  {
    quote:
      'The staff treated my mother with patience, warmth, and genuine respect. We always felt reassured.',
    name: 'Anita Shrestha',
    role: 'Family Member',
    avatar: '/testimonial-2-placeholder.jpg'
  },
  {
    quote:
      'AUM feels calm and caring. My father enjoys the daily routines and the companionship here.',
    name: 'Ramesh Gurung',
    role: 'Son of a Resident',
    avatar: '/testimonial-1-placeholder.jpg'
  },
  {
    quote:
      'It is comforting to know my grandmother lives in a home that values her dignity every day.',
    name: 'Sita Tamang',
    role: 'Granddaughter',
    avatar: '/testimonial-3-placeholder.jpg'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="section-kicker">Testimonials</p>
          <h2 className="section-title mt-3">Trust built through everyday care</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article key={testimonial.name} className="card-soft p-7">
              <p className="text-lg leading-8 text-ink/80">“{testimonial.quote}”</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full bg-sage-100">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name}, ${testimonial.role.toLowerCase()} at AUM Old Age Home`}
                    fill
                    sizes="60px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-ink">{testimonial.name}</p>
                  <p className="text-sm text-ink/65">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}