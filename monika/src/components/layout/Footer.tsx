import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

function SocialIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden>
      <path d={path} />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto hidden bg-ink text-white lg:block">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
            Pure Taste. Pure Tradition. Quality-focused edible oils for Indian
            households, packed with care from seed to bottle.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {[
              ["/", "Home"],
              ["/shop", "Shop"],
              ["/about", "About"],
              ["/quality", "Quality"],
              ["/contact", "Contact"],
              ["/login", "Login"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-mustard">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Customer Care</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {[
              ["/faq", "FAQs"],
              ["/shipping", "Shipping"],
              ["/returns", "Returns"],
              ["/privacy", "Privacy Policy"],
              ["/terms", "Terms & Conditions"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-mustard">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>Phone: +91 90000 00000</li>
            <li>Email: hello@monikaoils.com</li>
            <li>Kitchen Studio, India</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[
              {
                href: "https://instagram.com",
                label: "Instagram",
                path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.35-2.55a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z",
              },
              {
                href: "https://facebook.com",
                label: "Facebook",
                path: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1Z",
              },
              {
                href: "https://youtube.com",
                label: "YouTube",
                path: "M23 12.2s0-3.2-.4-4.6c-.2-.8-.9-1.5-1.7-1.7C19.4 5.5 12 5.5 12 5.5s-7.4 0-8.9.4c-.8.2-1.5.9-1.7 1.7C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.8.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.4.4-4.6.4-4.6ZM9.8 15.5V8.9l6.2 3.3-6.2 3.3Z",
              },
              {
                href: "https://wa.me/919000000000",
                label: "WhatsApp",
                path: "M20 11.5A8.5 8.5 0 0 1 7.3 18.6L4 20l1.5-3.2A8.5 8.5 0 1 1 20 11.5Zm-8.5-7A7 7 0 0 0 6 16.3l.3.5-.9 1.9 2-.8.5.3A7 7 0 1 0 11.5 4.5Zm4 9.6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.5.6c-.1.1-.3.2-.5.1s-1-.4-1.9-1.2c-.7-.6-1.2-1.4-1.3-1.6s0-.4.1-.5l.4-.4c.1-.1.1-.3.2-.4 0-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.4c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.8 3.4 2.2.9 2.2.6 2.6.6.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1 0-.1-.2-.1-.4-.2Z",
              },
            ].map(({ href, label, path }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-mustard hover:text-ink"
              >
                <SocialIcon path={path} />
              </a>
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/55">
        © 2026 MONIKA. All Rights Reserved.
      </div>
    </footer>
  );
}
