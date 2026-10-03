import Link from "next/link"
import { ArrowRight, Bot, Check, Compass, Cpu, Gauge, Radar, Route, Sparkles, Workflow } from "lucide-react"
import { Header } from "@/components/header"

const lenses = [
  ["01", "DIGITAL", "What is already digital?", Radar],
  ["02", "PROCESS", "Where is work still manual?", Workflow],
  ["03", "AUTOMATION", "What can be automated?", Gauge],
  ["04", "AI", "Where can intelligence improve the process?", Cpu],
  ["05", "AI AGENTS", "Which roles can be supported by specialized agents?", Bot],
  ["06", "FUTURE", "What should your business prepare for next?", Compass],
] as const

const outcomes = ["Business Assessment", "Digital Gap Identification", "Process Analysis", "Automation Opportunities", "AI Opportunities", "AI Agent Opportunities", "Transformation Roadmap"]

export default function AuditPage() {
  return <main className="inner-page audit-page"><Header /><section className="audit-hero shell"><div><div className="eyebrow"><span className="pulse-dot" /> NITAI AI BUSINESS AUDIT</div><h1>Find your <em>highest-value</em> AI opportunity.</h1><p>Start with your business problem, not with a list of AI tools. Our audit turns operational friction into a clear transformation path.</p><Link className="primary-button" href="#lenses">Explore the audit <ArrowRight /></Link></div><div className="audit-visual"><div className="audit-ring ring-one" /><div className="audit-ring ring-two" /><div className="audit-center"><Sparkles /><span>BUSINESS<br />CLARITY</span></div><span className="audit-float float-one">FIND FRICTION</span><span className="audit-float float-two">CREATE LEVERAGE</span></div></section><section className="audit-lenses shell" id="lenses"><div className="section-kicker">THE 6 AUDIT LENSES <span>01 — 06</span></div><div className="audit-lens-grid">{lenses.map(([number, title, text, Icon]) => <article key={title}><span>{number}</span><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></section><section className="audit-outcomes shell"><div><div className="section-kicker">WHAT YOU GET <span>OUTPUT / 07</span></div><h2>A map for <em>meaningful momentum.</em></h2></div><div className="outcome-list">{outcomes.map((item) => <div key={item}><Check />{item}</div>)}</div></section><section className="audit-path shell"><div className="section-kicker">THE TRANSFORMATION PATH <span>→</span></div><div className="path-row">{["Discover", "Audit", "Prioritize", "Build", "Automate", "Intelligence", "Agents", "Scale"].map((item, i) => <div key={item}><b>{String(i + 1).padStart(2, "0")}</b><span>{item}</span>{i < 7 && <ArrowRight />}</div>)}</div></section><section className="audit-cta shell"><Route /><div><div className="section-kicker">READY WHEN YOU ARE <span>CTA / 01</span></div><h2>Book your NITAI<br /><em>AI Business Audit.</em></h2><p>Find where digital, automation and AI can create meaningful opportunities for your business.</p></div><Link className="primary-button" href="tel:9340952324">Book My AI Business Audit <ArrowRight /></Link></section></main>
}

