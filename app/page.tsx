import Link from "next/link"
import { ArrowDownRight, ArrowRight, ArrowUpRight, Bot, BrainCircuit, Check, ChevronRight, Database, Gauge, Globe2, LineChart, MessageSquareText, Play, Sparkles, Workflow, Zap } from "lucide-react"
import { Header } from "@/components/header"

const solutions = [
  { icon: Globe2, title: "Digital Business Foundation", text: "Websites, funnels, CRM, apps, software and digital marketing.", color: "violet" },
  { icon: Workflow, title: "Automated Business Processes", text: "Marketing, sales, operations, HR, WhatsApp and email — connected.", color: "cyan" },
  { icon: BrainCircuit, title: "AI-Powered Workflows", text: "Research, content, analysis, communication and customer support.", color: "lime" },
  { icon: Bot, title: "AI Digital Workforce", text: "Marketing, sales, content, service and operations agents.", color: "coral" },
]

const agents = ["Marketing Agent", "Sales Agent", "Content Agent", "Social Media Agent", "Customer Service Agent", "HR Agent", "Operations Agent", "Research Agent"]
const steps = ["Discover", "Audit", "Prioritize", "Build", "Automate", "Intelligence", "Agents", "Scale"]
const industries = ["Education", "Agriculture", "Healthcare", "Pharma", "Real Estate", "Banking", "Finance", "Media", "Technology", "E-Commerce"]

export default function Home() {
  return (
    <main id="home">
      <Header />
      <section className="hero-section shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> AI SYSTEMS FOR AMBITIOUS BUSINESS</div>
          <h1>Your business doesn&apos;t need more <span>AI tools.</span><br />It needs an <i>AI-powered</i> business system.</h1>
          <p className="hero-text">NITAI helps businesses design, build, automate and improve digital and AI systems for marketing, sales, operations, HR, customer service and growth.</p>
          <div className="hero-actions"><Link className="primary-button" href="#audit">Book Your AI Business Audit <ArrowUpRightIcon /></Link><Link className="text-link" href="#how-it-works">Explore the system <ArrowRight aria-hidden="true" /></Link></div>
          <div className="hero-proof"><span><Check /> Digital-first</span><span><Check /> Automation-ready</span><span><Check /> Human-led</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap"><img src="/nitai-ai-hero.png" alt="Abstract luminous AI network representing a connected business system" /></div>
          <div className="orbit-card orbit-top"><Sparkles /> <span>AI-Powered<br /><b>Growth Engine</b></span></div>
          <div className="orbit-card orbit-bottom"><Gauge /> <span>Systems that<br /><b>scale with you</b></span></div>
          <div className="hero-index">01 <span>/ 08</span></div>
        </div>
      </section>

      <section className="marquee-strip" aria-label="NITAI transformation path"><span>MANUAL</span><ArrowRight /><span>DIGITAL</span><ArrowRight /><span>AUTOMATED</span><ArrowRight /><span>AI-POWERED</span><ArrowRight /><span>FUTURE-READY</span></section>

      <section className="problem-section shell" id="system-gap">
        <div className="section-kicker">THE SYSTEM GAP <span>02</span></div>
        <div className="split-heading"><h2>How much of your business still depends on <em>manual work?</em></h2><p>You may not have a people problem.<br /><strong>You may have a system problem.</strong></p></div>
        <div className="problem-grid"><div className="problem-statement"><MessageSquareText /><p>Content, social media, lead follow-ups, customer messages, reports, data entry, HR, marketing, sales coordination and repetitive administration can consume valuable time.</p><Link href="#audit" className="circle-link">Find the gaps <ArrowDownRight /></Link></div><div className="stat-card"><span>01</span><strong>40%</strong><p>of working hours can be repetitive or automatable.</p></div><div className="stat-card bright"><span>02</span><strong>∞</strong><p>possibilities when your systems finally connect.</p></div></div>
      </section>

      <section className="solutions-section shell" id="solutions"><div className="section-kicker">NITAI SOLUTIONS <span>03</span></div><div className="section-title-row"><h2>Digital. Development.<br /><em>Automation. AI.</em></h2><p>NITAI provides an integrated ecosystem to help businesses build, digitize, automate and improve their operations.</p></div><div className="solutions-grid">{solutions.map(({ icon: Icon, title, text, color }, index) => <article className={`solution-card ${color}`} key={title}><div className="card-number">0{index + 1}</div><Icon className="solution-icon" /><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" /></article>)}</div><div className="service-matrix"><article><span>01 / DIGITAL AGENCY</span><h3>Build • Brand • Market • Grow</h3><p>Content, design, video, social, digital marketing, SEO, paid ads, landing pages, funnels and websites.</p></article><article><span>02 / DEVELOPMENT AGENCY</span><h3>Technology your business needs.</h3><p>Websites, portals, mobile apps, software, e-commerce, CRM, ERP, HRMS, LMS and AI applications.</p></article><article><span>03 / AUTOMATION AGENCY</span><h3>Make repetitive work disappear.</h3><p>Connect marketing, sales, operations, HR, WhatsApp, email and business systems into one flow.</p></article><article><span>04 / AI SOLUTIONS</span><h3>Tools, agents and intelligence.</h3><p>AI tools, chatbots, AI-powered workflows, digital workforce training and ongoing optimization.</p></article></div></section>

      <section className="agents-section shell" id="ai-agents"><div className="agents-visual"><div className="agent-ring ring-one" /><div className="agent-ring ring-two" /><div className="agent-core"><Bot /><span>AI<br />WORKFORCE</span></div><div className="agent-node node-one"><Zap /></div><div className="agent-node node-two"><Database /></div><div className="agent-node node-three"><LineChart /></div></div><div className="agents-copy"><div className="section-kicker">NITAI AI AGENTS <span>04</span></div><h2>Build digital workers.<br /><em>Not just chatbots.</em></h2><p>Specialized AI agents that understand their role, your context and the outcomes that matter. Then connect them into a workforce that works across every department.</p><div className="agent-list">{agents.map((agent, i) => <div key={agent}><span>0{i + 1}</span>{agent}<ChevronRight /></div>)}</div><div className="agent-flow"><b>AI Assistant</b><ArrowRight /><b>AI Workforce</b><ArrowRight /><b>Multi-Agent System</b></div></div></section>

      <section className="industries-section shell" id="industries"><div className="section-kicker">WHO WE HELP <span>05</span></div><div className="industries-heading"><h2>Built for the<br /><em>bold & busy.</em></h2><p>Startups to corporates. Institutions to founders. If there is a process to improve, NITAI can help you move forward.</p></div><div className="industry-cloud">{industries.map((item, i) => <span key={item} className={`industry-pill pill-${i % 4}`}>{item}</span>)}</div></section>

      <section className="process-section shell" id="how-it-works"><div className="section-kicker">THE NITAI METHOD <span>06</span></div><div className="section-title-row"><h2>From friction<br />to <em>flow.</em></h2><p>A practical, measurable path from manual work to an intelligent business system.</p></div><div className="steps-grid">{steps.map((step, i) => <div className={`step ${i === 5 ? "step-active" : ""}`} key={step}><span>0{i + 1}</span><div><h3>{step}</h3><p>{["Understand your business.", "Identify gaps and opportunities.", "Select transformation priorities.", "Create digital systems.", "Connect your workflows.", "Introduce AI tools.", "Deploy specialized agents.", "Expand what works."][i]}</p></div></div>)}</div></section>

      <section className="about-section shell" id="about-nitai"><div className="section-kicker">ABOUT NITAI <span>07</span></div><div className="section-title-row"><h2>Human strategy.<br /><em>Machine scale.</em></h2><p>NITAI is the partner for ambitious teams ready to turn scattered tools and manual work into a connected operating advantage.</p></div></section>

      <section className="resources-section shell" id="resources"><div className="section-kicker">RESOURCES <span>08</span></div><div className="resource-grid"><article><span>PLAYBOOK</span><h3>The AI Business Audit</h3><p>Find your highest-value opportunities for automation and intelligence.</p></article><article><span>FIELD NOTE</span><h3>Build your AI workforce</h3><p>A practical guide to moving beyond isolated chatbots.</p></article><article><span>START HERE</span><h3>Talk to NITAI</h3><p>Bring us your bottleneck. We&apos;ll help you map the next move.</p></article></div></section>

      <section className="final-cta shell" id="audit"><div className="cta-glow" /><div className="section-kicker">WHY NITAI <span>07</span></div><h2>Your business.<br />Your people.<br /><em>Your intelligence.</em></h2><p>Now connect them with intelligence.</p><div className="cta-actions"><Link className="primary-button" href="mailto:hello@nitai.ai">Book Your AI Business Audit <ArrowUpRightIcon /></Link><Link className="secondary-button" href="tel:+919340952324">Talk to NITAI AI <Play /></Link></div><div className="cta-bottom"><span>NITAI AI & DIGITAL EMPIRE</span><span>Digital • Automated • Intelligent • Future-Ready</span><span>Call / WhatsApp: 9340952324</span></div></section>
      <footer className="site-footer"><span>NITAI<span className="footer-dot">.</span></span><span>© 2026 NITAI AI & DIGITAL EMPIRE</span><span>Made for the next chapter.</span></footer>
    </main>
  )
}

function ArrowUpRightIcon() { return <ArrowUpRight aria-hidden="true" /> }
