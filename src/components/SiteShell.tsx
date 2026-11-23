"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const links = [["Home", "/"], ["About", "/about"], ["Programmes", "/programmes"], ["How It Works", "/how-it-works"], ["FAQs", "/faq"], ["Contact", "/contact"]] as const;

function Header() {
  return <header className="site-header"><div className="container nav-inner">
    <Link href="/" className="brand" aria-label="Aurona Academy homepage"><Image src="/images/aurona-logo.png" alt="Aurona Academy" width={180} height={110} className="brand-logo" priority /></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav>
    <Link className="button button-primary nav-cta" href="/contact">Enquire Now <ArrowRight size={17} aria-hidden="true" /></Link>
    <details className="mobile-menu"><summary aria-label="Open navigation menu"><span /><span /><span /></summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav></details>
  </div></header>;
}
function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div className="footer-brand"><Link href="/" aria-label="Aurona Academy homepage"><Image src="/images/aurona-logo.png" alt="Aurona Academy" width={160} height={98} /></Link><p>Better Guidance. Brighter Futures.</p><p>Education, Research and Consultancy.</p><p className="footer-tagline">Learn. Grow. Excel.</p></div>
    <div className="footer-column"><h3>Explore</h3><Link href="/about">About Us</Link><Link href="/programmes">Programmes</Link><Link href="/how-it-works">How It Works</Link><Link href="/faq">Frequently Asked Questions</Link><Link href="/privacy">Privacy Policy</Link></div>
    <div className="footer-column"><h3>Get in Touch</h3><a href="mailto:auronaacademy@gmail.com"><Mail size={16} /> auronaacademy@gmail.com</a><a href="https://wa.me/14313238372" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp · Canada</a><a href="https://wa.me/2347069396914" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp · Nigeria</a><a href="https://wa.me/2348162541654" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp · Nigeria</a></div>
  </div><div className="container footer-bottom"><p>© 2026 Aurona Academy. All rights reserved.</p><p>Better Guidance • Brighter Futures</p></div></footer>;
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return <>{children}</>;
  return <><Header />{children}<Footer /></>;
}
