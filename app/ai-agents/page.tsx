"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ArrowRight, Zap, Database, Code, LayoutDashboard, MessageSquare, Users, GraduationCap, Cpu, ShieldCheck } from "lucide-react";

const agents = [
  { icon: Zap, title: "Marketing Agent", steps: "Research → Content → Campaign Support → Reporting" },
  { icon: Database, title: "Sales Agent", steps: "Lead → Qualification → Follow‑up → CRM Update" },
  { icon: Code, title: "Content Agent", steps: "Research → Draft → Repurpose → Content Calendar" },
  { icon: LayoutDashboard, title: "Social Media Agent", steps: "Planning → Publishing → Engagement → Reporting" },
  { icon: MessageSquare, title: "Customer Service Agent", steps: "Question → Info → Response → Escalation" },
  { icon: Users, title: "HR Agent", steps: "Recruitment → Screening → Onboarding → Docs" },
  { icon: Cpu, title: "Operations Agent", steps: "Task → Workflow → Monitoring → Reporting" },
  { icon: ShieldCheck, title: "Research Agent", steps: "Research → Analysis → Summary → Recommendation" },
];

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } } };

export default function AiAgentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero */}
      <section className="py-20 md:py-28 text-center bg-primary/5">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500 mb-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={item}>NITAI AI AGENTS</motion.span>
        </motion.h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          The NITAI AI Agents Army – Build specialized digital workers for every business function.
        </p>
        <Link href="/audit" className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition">
          Talk to NITAI AI <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </section>

      {/* Agents Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {agents.map((a, i) => (
            <motion.div
              key={i}
              className="p-6 bg-secondary/20 rounded-xl border border-border shadow-sm hover:shadow-md transition"
              variants={item}
            >
              <a.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.steps}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Multi‑Agent Flowchart */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Multi‑Agent System</h2>
          <Image src="/images/ai_agents_flowchart_1791032444878.jpg" alt="AI Agents Flowchart" width={800} height={500} className="mx-auto rounded-lg shadow" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Build Your AI Workforce</h2>
        <p className="mb-8 max-w-xl mx-auto">Talk to NITAI AI and start deploying specialized agents today.</p>
        <Link href="/audit" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-gray-100 transition">
          Talk to NITAI AI <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
