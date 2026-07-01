import {
  Activity,
  Home,
  MessageCircleHeart,
  Music2,
  UtensilsCrossed,
  Users
} from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: '24/7 Medical Care',
    description: 'Continuous health monitoring and prompt support from trained caregivers.'
  },
  {
    icon: UtensilsCrossed,
    title: 'Nutritious Meals',
    description: 'Balanced daily meals prepared with care for comfort and strength.'
  },
  {
    icon: Music2,
    title: 'Recreational Activities',
    description: 'Gentle activities that encourage joy, movement, and daily engagement.'
  },
  {
    icon: MessageCircleHeart,
    title: 'Counseling Support',
    description: 'Emotional support for residents and families through life transitions.'
  },
  {
    icon: Home,
    title: 'Comfortable Rooms',
    description: 'Clean, calm living spaces designed for rest, privacy, and ease.'
  },
  {
    icon: Users,
    title: 'Community Events',
    description: 'Shared gatherings that bring connection, celebration, and belonging.'
  }
];

export function ServicesFacilities() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="section-kicker">Services &amp; Facilities</p>
          <h2 className="section-title mt-3">Support that is practical, gentle, and reliable</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="card-soft group p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(61,58,54,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-50 text-sage-700 transition group-hover:bg-sage-100">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 leading-7 text-ink/75">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}