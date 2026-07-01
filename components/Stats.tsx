const stats = [
  { value: '50+', label: 'Residents Cared For' },
  { value: '10+', label: 'Years of Service' },
  { value: '100+', label: 'Volunteers' },
  { value: '24/7', label: 'Care' }
];

export function Stats() {
  return (
    <section className="py-6 sm:py-10">
      <div className="section-shell">
        <div className="grid gap-4 rounded-[2rem] bg-sage-50 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-4xl font-semibold tracking-tight text-sage-700 sm:text-5xl">
                {stat.value}
              </div>
              <p className="mt-2 text-base font-medium text-ink/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}