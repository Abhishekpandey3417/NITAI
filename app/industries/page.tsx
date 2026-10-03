"use client";
import Link from "next/link";
import { Header } from "@/components/header";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, BriefcaseBusiness, Building2, Cpu, HeartPulse, Leaf, Landmark, Microscope, Play, ShoppingCart, Sparkles, Stethoscope, Workflow } from "lucide-react";

const industries = [
  ["Education", "Digital platforms, automation and AI-enabled workflows.", Building2, "from-violet-500/20 to-purple-500/10", "text-violet-500"],
  ["Agriculture", "Digital operations, automation and intelligent workflows.", Leaf, "from-lime-500/20 to-green-500/10", "text-lime-500"],
  ["Healthcare", "Digital systems, automation and AI applications.", HeartPulse, "from-cyan-500/20 to-blue-500/10", "text-cyan-500"],
  ["Pharma", "Digital and AI-enabled business systems.", Stethoscope, "from-coral-500/20 to-orange-500/10", "text-orange-500"],
  ["Real Estate", "Marketing, sales, CRM and automation.", Landmark, "from-violet-500/20 to-purple-500/10", "text-violet-500"],
  ["Banking", "Digital systems, automation and AI solutions.", BriefcaseBusiness, "from-cyan-500/20 to-blue-500/10", "text-cyan-500"],
  ["Finance", "Intelligent workflows, automation and business systems.", BarChart3, "from-lime-500/20 to-green-500/10", "text-lime-500"],
  ["Insurance", "Digital processes, automation and AI applications.", Workflow, "from-coral-500/20 to-orange-500/10", "text-orange-500"],
  ["Media", "Content, digital workflows and automation.", Play, "from-violet-500/20 to-purple-500/10", "text-violet-500"],
  ["Services", "Digital transformation and business automation.", Sparkles, "from-cyan-500/20 to-blue-500/10", "text-cyan-500"],
  ["E-Commerce", "Digital platforms, marketing, automation and AI.", ShoppingCart, "from-lime-500/20 to-green-500/10", "text-lime-500"],
  ["Technology", "Software, AI applications and intelligent systems.", Cpu, "from-coral-500/20 to-orange-500/10", "text-orange-500"],
  ["Digital Marketing", "Content, campaigns, automation and AI workflows.", BarChart3, "from-violet-500/20 to-purple-500/10", "text-violet-500"],
  ["Social Media", "Content planning, publishing and engagement workflows.", Sparkles, "from-cyan-500/20 to-blue-500/10", "text-cyan-500"],
  ["Content Creation", "Research, content generation and repurposing.", Microscope, "from-lime-500/20 to-green-500/10", "text-lime-500"],
  ["Web3 / Web4", "Modern digital platforms and technology solutions.", Cpu, "from-coral-500/20 to-orange-500/10", "text-orange-500"],
  ["STEM / R&D", "Research, analysis and AI-enabled workflows.", Microscope, "from-violet-500/20 to-purple-500/10", "text-violet-500"],
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } }
};

export default function IndustriesPage() {
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> AI FOR YOUR INDUSTRY
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Every industry has a <span className="italic">next system.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We help businesses and organizations explore digital, automation and AI opportunities based on their industry and requirements.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="#industry-grid" className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-foreground border border-border rounded-full font-medium hover:bg-secondary/80 transition-all group">
              Explore the map <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-y-1 group-hover:rotate-90 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 bg-background" id="industry-grid">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-bold mb-4">THE NITAI INDUSTRY MAP</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">One partner. <span className="text-primary italic">Many frontiers.</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Different industries. Different constraints. The same opportunity to remove friction and create intelligent momentum.</p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {industries.map(([title, text, Icon, bgClass, textClass], index) => (
              <motion.div key={title} variants={itemVariants} className="group relative p-6 bg-secondary/30 rounded-2xl border border-border hover:border-primary/40 transition-all hover:shadow-lg overflow-hidden flex flex-col h-full">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${bgClass} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${textClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{text}</p>
                <div className="mt-6 pt-4 border-t border-border/50 flex justify-end">
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-lg text-sm font-bold mb-6">YOUR OPPORTUNITY</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Tell us about <span className="italic">your industry.</span></h2>
          <Link href="/audit" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
            Explore Your AI Opportunity <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
