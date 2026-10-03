"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Cpu, LineChart, MessageSquare, MonitorPlay, MousePointerClick, Zap, ShieldCheck, GraduationCap, LayoutDashboard, Share2, PenTool, Database } from "lucide-react"
import { Header } from "@/components/header"
import { motion } from "framer-motion"

export default function SolutionPage() {
  const headingText = ["DIGITAL", "+", "DEVELOPMENT", "+", "AUTOMATION", "+", "AI"]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  }

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
            <Zap className="w-4 h-4" /> NITAI SOLUTIONS
          </div>
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headingText.map((word, index) => (
              <motion.span key={index} variants={itemVariants} className="inline-block mx-[0.2em]">
                {word}
                {index === 2 && <br className="hidden md:block" />}
              </motion.span>
            ))}
          </motion.h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            NITAI provides an integrated ecosystem to help businesses build, digitize, automate and improve their operations.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/audit" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1">
              Book Your AI Business Audit <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-50"></div>
      </section>

      {/* Asymmetric Grid Content Sections */}
      <motion.section className="py-12 md:py-16" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-20">
          
          {/* DIGITAL AGENCY */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image src="/images/digital_agency_1791029286518.jpg" alt="Digital Agency" width={800} height={800} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 md:pl-10">
              <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-500 rounded-lg text-sm font-bold mb-4">DIGITAL AGENCY</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Build • Brand • Market • Grow</h2>
              <div className="grid grid-cols-2 gap-4 text-muted-foreground">
                <div className="flex items-center gap-2"><PenTool className="w-5 h-5 text-primary" /> Content Writing</div>
                <div className="flex items-center gap-2"><LayoutDashboard className="w-5 h-5 text-primary" /> Graphic Designing</div>
                <div className="flex items-center gap-2"><MonitorPlay className="w-5 h-5 text-primary" /> Video Editing</div>
                <div className="flex items-center gap-2"><Share2 className="w-5 h-5 text-primary" /> Social Media Mgt</div>
                <div className="flex items-center gap-2"><LineChart className="w-5 h-5 text-primary" /> Digital Marketing</div>
                <div className="flex items-center gap-2"><Code className="w-5 h-5 text-primary" /> SEO / AIEO</div>
                <div className="flex items-center gap-2"><MousePointerClick className="w-5 h-5 text-primary" /> Paid Ads</div>
                <div className="flex items-center gap-2"><LayoutDashboard className="w-5 h-5 text-primary" /> Landing Pages</div>
              </div>
            </div>
          </div>

          {/* DEVELOPMENT AGENCY */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 md:pr-10">
              <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-500 rounded-lg text-sm font-bold mb-4">DEVELOPMENT AGENCY</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Build The Technology Your Business Needs.</h2>
              <p className="text-lg text-muted-foreground mb-8">From web portals to AI applications, we build robust, scalable, and modern solutions.</p>
              <div className="flex flex-wrap gap-3">
                {["Websites", "Web Portals", "Mobile Apps", "Software", "E-Commerce", "CRM", "ERP", "HRMS", "LMS", "AI Applications", "Business Platforms", "Web3 / Web4 Development"].map(item => (
                  <span key={item} className="px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium">{item}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image src="/images/dev_agency_1791029301705.jpg" alt="Development Agency" width={800} height={800} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>

          {/* AUTOMATION AGENCY */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image src="/images/automation_agency_1791029457459.jpg" alt="Automation Agency" width={800} height={800} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 md:pl-10">
              <div className="inline-block px-3 py-1 bg-green-500/10 text-green-500 rounded-lg text-sm font-bold mb-4">AUTOMATION AGENCY</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Automate Repetitive Business Work.</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><LineChart className="text-green-500" /> MARKETING & SALES</h3>
                  <p className="text-muted-foreground">Lead Capture • Campaign Workflows • Content Workflows • Lead Qualification • Follow-up • CRM Workflows</p>
                </div>
                <div className="h-px bg-border w-full"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Database className="text-green-500" /> OPERATIONS & HR</h3>
                  <p className="text-muted-foreground">Task Routing • Notifications • Reporting • Recruitment • Onboarding • Employee Processes</p>
                </div>
                <div className="h-px bg-border w-full"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><MessageSquare className="text-green-500" /> COMMUNICATION & SYSTEMS</h3>
                  <p className="text-muted-foreground">WhatsApp • Email • Social Media • CRM • ERP • HRMS • LMS</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI SOLUTIONS */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 md:pr-10">
              <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-500 rounded-lg text-sm font-bold mb-4">AI SOLUTIONS & SUPPORT</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Next-Generation AI Ecosystems.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                  <Cpu className="w-10 h-10 text-cyan-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">AI Solutions</h3>
                  <p className="text-muted-foreground text-sm">AI Tools, Applications, Chatbots, AI-Powered Workflows & Business Systems.</p>
                </div>
                <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                  <GraduationCap className="w-10 h-10 text-cyan-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Training</h3>
                  <p className="text-muted-foreground text-sm">AI Tools, AI Agents, Automation mastery & Digital Workforce training.</p>
                </div>
                <div className="p-6 bg-secondary/50 rounded-2xl border border-border sm:col-span-2">
                  <ShieldCheck className="w-10 h-10 text-cyan-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Support</h3>
                  <p className="text-muted-foreground text-sm">Implementation, Monitoring, Reporting, and Continuous Optimization.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image src="/images/ai_agency_1791029476064.jpg" alt="AI Solutions" width={800} height={800} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-12 md:py-16 relative overflow-hidden" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to transform your business?</h2>
          <p className="text-xl text-muted-foreground mb-10">Take the first step towards a digitized, automated, and AI-powered future.</p>
          <Link href="/audit" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-10 py-5 font-bold text-xl hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/30 hover:-translate-y-2">
            Book Your AI Business Audit <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </motion.section>
    </div>
  )
}
