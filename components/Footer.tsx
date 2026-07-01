import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' }
];

export function Footer() {
  return (
    <footer id="contact" className="bg-sage-900 text-white">
      <div className="section-shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <p className="text-2xl font-semibold tracking-tight">AUM Old Age Home</p>
            <p className="mt-4 max-w-md text-white/75">
              A respectful and caring space for elders in Nepal, supported by community and
              compassion.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span>Kathmandu, Nepal, Address Placeholder</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0" />
                <span>+977-000-0000000</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0" />
                <span>info@aumoldagehome.org</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold">Quick Links</p>
            <nav className="mt-5 flex flex-col gap-3 text-white/78">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-8 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="rounded-full border border-white/15 p-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full border border-white/15 p-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="rounded-full border border-white/15 p-3 text-white/80 transition hover:bg-white/10 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold">Map</p>
            <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-sage-800/60 shadow-soft">
              <div className="flex min-h-56 items-center justify-center px-6 text-center text-sm text-white/70">
                Embedded map placeholder for Kathmandu, Nepal
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}