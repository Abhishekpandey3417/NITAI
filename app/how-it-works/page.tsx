"use client";
import Link from "next/link";
import { Header } from "@/components/header";
import { motion } from "framer-motion";
import { ArrowRight, Bot, BrainCircuit, Check, Compass, Gauge, Search, Sparkles, Target, Workflow, Zap } from "lucide-react";

const steps = [
  ["DISCOVER", "Understand your business.", Compass, "We listen to your goals, people, processes and ambitions."],
  ["AUDIT", "Identify gaps and opportunities.", Search, "We map where time, money and momentum are being lost."],
  ["PRIORITIZE", "Select high-value transformation opportunities.", Target, "We focus your energy on changes with measurable upside."],
  ["BUILD", "Create the required digital systems.", Workflow, "We turn the roadmap into useful, connected infrastructure."],
  ["AUTOMATE", "Connect and automate workflows.", Zap, "We make repetitive work move without constant manual effort."],
  ["INTELLIGENCE", "Introduce AI tools and applications.", BrainCircuit, "We place intelligence where it can improve decisions and delivery."],
  ["AGENTS", "Deploy specialized AI agents.", Bot, "We create digital workers for the roles your team needs."],
  ["SCALE", "Expand across departments and processes.", Gauge, "We keep improving the system as your business grows."],
] as const;

const questions = [
  "What is happening now?",
  "Where is time being lost?",
  "Where is money being lost?",
  "What can be digitalized?",
  "What can be automated?",
  "Where can AI help?",
  "Which AI agents are required?",
  "How should everything connect?"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> BUSINESS FIRST. TECHNOLOGY SECOND.
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How NITAI works.
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            NITAI starts by understanding your business, processes and objectives before deciding what technology is required.
          </motion.p>
        </div>
      </section>

      {/* The NITAI Method */}
      <section className="py-20 bg-background" id="method">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">From friction to <span className="text-primary italic">flow.</span></h2>
            <p className="text-xl text-muted-foreground">A practical, measurable path from manual work to an intelligent business system.</p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map(([title, subtitle, Icon, text], index) => (
              <motion.div key={title} variants={itemVariants} className="group relative p-8 bg-secondary/30 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="absolute top-4 right-4 text-6xl font-black text-primary/5 select-none transition-transform group-hover:scale-110">
                  {index + 1}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <strong className="block text-sm text-primary mb-3">{subtitle}</strong>
                <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Questions We Ask */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-bold">THE QUESTIONS WE ASK</div>
              <h2 className="text-4xl md:text-5xl font-bold">Clarity creates<br/><span className="text-primary italic">momentum.</span></h2>
              <p className="text-lg text-muted-foreground">We do not begin with a tool. We begin with the truth of how your business works today.</p>
              
              <ul className="space-y-4 mt-8">
                {["Actual requirements", "High-value opportunities", "A business-specific roadmap"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <Check className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {questions.map((question, i) => (
                <motion.div key={i} variants={itemVariants} className="p-4 bg-background rounded-xl shadow-sm border border-border flex items-start gap-3">
                  <span className="text-primary font-mono text-sm opacity-50 mt-1">0{i + 1}</span>
                  <p className="font-medium">{question}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-24 bg-primary text-primary-foreground text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">A roadmap based on your actual requirements.</h2>
          <Link href="/audit" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
            Start Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
