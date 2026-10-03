import Link from "next/link"
import { ArrowUpRight, ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react"
import { Header } from "@/components/header"

const faqs = [
  ["Do we need to replace our existing software?", "Not necessarily. NITAI can first explore whether your existing systems can work better together through integration and automation."],
  ["We are too small for AI.", "You don't need to transform everything. Start with one process, one department, one measurable outcome, then scale."],
  ["AI sounds too complicated.", "The journey can be structured: Audit, Roadmap, Implementation, Training, Automation, AI, Agents, Optimization."],
  ["Will AI replace our people?", "The practical objective is Human + AI. People focus on leadership, judgment, relationships, creativity and accountability."],
  ["Can NITAI work with our team?", "Yes. Your team brings business knowledge. NITAI brings digital, automation, AI, technology capability and training."],
  ["Who is NITAI for?", "Startups, MSMEs, SMEs, companies, corporates, organizations, institutions and professional businesses."],
  ["Who is NITAI not for?", "Businesses looking for guaranteed overnight results, technology without business objectives, or generic AI packages."],
]

export default function FAQsPage() {
  return <main className="inner-page faq-page"><Header /><section className="faq-hero shell"><div className="faq-number">07</div><div><div className="eyebrow"><span className="pulse-dot" /> CLEAR ANSWERS, BETTER DECISIONS</div><h1>Questions are<br /><span>strategy</span> in disguise.</h1><p>Simple answers to help you understand the NITAI approach to AI, automation and transformation.</p></div><div className="faq-icon"><HelpCircle /><Sparkles /></div></section><section className="faq-content shell"><div className="section-kicker">NITAI FAQS <span>01 — 07</span></div><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question} open={i === 0}><summary><span>0{i + 1}</span><strong>{question}</strong><ChevronDown /></summary><p>{answer}</p></details>)}</div></section><section className="faq-cta shell"><div><div className="section-kicker">STILL CURIOUS? <span>08</span></div><h2>Have more<br /><em>questions?</em></h2></div><Link className="primary-button" href="/audit">Talk to NITAI AI <MessageCircle /></Link></section></main>
}
