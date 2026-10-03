import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const links = [{ label: "Home", href: "/#home" }, { label: "Solutions", href: "/solution" }, { label: "AI Agents", href: "/ai-agents" }, { label: "Industries", href: "/industries" }, { label: "How It Works", href: "/how-it-works" }, { label: "About NITAI", href: "/about-nitai" }, { label: "Resources", href: "/resources" }]

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="NITAI AI and Digital Empire home">
        <span className="brand-mark">N</span>
        <span>NITAI <em>AI & DIGITAL</em><strong>EMPIRE</strong></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}
      </nav>
      <Link className="audit-button" href="/audit">Book AI Business Audit <ArrowUpRight aria-hidden="true" /></Link>
    </header>
  )
}
