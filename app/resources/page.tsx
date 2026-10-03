import Link from "next/link"
import { ArrowUpRight, BookOpen, Bot, BrainCircuit, CheckCircle2, Lightbulb, MessageCircle, Network, Sparkles } from "lucide-react"
import { Header } from "@/components/header"

const insights = [
  [BrainCircuit, "AI Insights", "Learn how businesses can use AI effectively.", "violet"],
  [Network, "Business Automation", "Understand where repetitive business processes can be automated.", "cyan"],
  [Bot, "AI Agents", "Explore AI digital workers and multi-agent systems.", "lime"],
  [Sparkles, "Digital Transformation", "Explore the journey from manual to digital and AI-powered operations.", "coral"],
  [Lightbulb, "Industry Insights", "Explore AI opportunities across different industries.", "violet"],
  [BookOpen, "FAQs", "Common questions about NITAI's services, AI, automation and transformation.", "cyan"],
] as const

export default function ResourcesPage() {
  return <main className="inner-page resources-page"><Header /><section className="resources-hero shell"><div><div className="eyebrow"><span className="pulse-dot" /> KNOWLEDGE FOR THE NEXT MOVE</div><h1>Ideas that turn into <span>action.</span></h1><p>Practical information for leaders building digital, automated and AI-powered businesses.</p><Link className="primary-button" href="/audit">Start with an AI audit <ArrowUpRight /></Link></div><div className="resources-emblem"><div className="resource-orbit orbit-r1" /><div className="resource-orbit orbit-r2" /><div className="resource-core"><BookOpen /><span>NITAI<br />LIBRARY</span></div><Sparkles className="resource-spark" /></div></section><section className="resources-grid-section shell"><div className="section-kicker">EXPLORE THE LIBRARY <span>01</span></div><div className="resource-page-grid">{insights.map(([Icon, title, text, color], index) => <article className={`resource-page-card ${color}`} key={title}><span>0{index + 1}</span><Icon /><h2>{title}</h2><p>{text}</p><ArrowUpRight className="card-arrow" /></article>)}</div></section><section className="resource-cta shell"><div><div className="section-kicker">YOUR NEXT QUESTION <span>02</span></div><h2>Have a business<br /><em>problem?</em></h2></div><Link className="primary-button" href="/audit">Talk to NITAI AI <MessageCircle /></Link></section></main>
}
