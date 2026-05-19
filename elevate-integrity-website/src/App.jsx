
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Radar,
  MapPin,
  FileCheck,
  HardHat,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Wrench,
} from "lucide-react";

function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold shadow-sm";
  const styles =
    variant === "outline"
      ? "border border-white/20 bg-transparent text-white hover:bg-white/10"
      : "bg-orange-500 text-white hover:bg-orange-600";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.06] ${className}`}>
      {children}
    </div>
  );
}

export default function App() {
  const services = [
    ["Advanced Ultrasonics", "PAUT, TOFD, encoded long seam inspection, corrosion mapping, and specialized UT applications."],
    ["Conventional NDT", "RT, UT, MT, PT, VT, weld inspection, In-Service Inspection, repair verification, and fabrication support."],
    ["Pipeline Integrity", "ILI dig verification, SCC validation, integrity excavations, anomaly assessment, and field oversight."],
    ["Utility & Chief Inspection", "Utility inspectors through chief inspectors with project oversight and documentation support."],
    ["Procedure & Compliance Support", "Written practices, inspection procedures, audit responses, and client-specific documentation."],
    ["Reporting & Job Books", "Clean, consistent reporting packages designed for client review and long-term records. Typical out withen an hour to minimize downtime"],
  ];

  const industries = [
    "Pipeline Integrity",
    "Refineries & Terminals",
    "Fabrication Shops",
    "Compressor & Pump Stations",
    "ILI Verification Digs",
    "Maintenance & Outage Work",
    "Weld Repair Programs",
    "Owner Representation",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="block">
            <div className="flex items-center gap-3">
  <img src="/background removed blue.png" alt="Elevate Integrity Services" className="h-12 w-auto" />
  <div>
    <div className="text-xl font-bold tracking-wide">Elevate Integrity Services</div>
    <div className="text-xs uppercase tracking-[0.25em] text-slate-400">NDT • PAUT • Pipeline Integrity</div>
  </div>
</div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#coverage" className="hover:text-white">Coverage</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact">
            <Button className="hidden sm:inline-flex">Request Quote</Button>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-5 inline-flex rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-sm text-orange-200">
                Premium inspection support for critical assets
              </div>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Advanced NDT and pipeline integrity inspection services.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Elevate Integrity Services supports pipeline, refinery, station, fabrication, and integrity projects with experienced inspectors, advanced NDT capabilities, clear reporting, and responsive field coverage.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact">
                  <Button className="w-full px-7 py-4 text-base sm:w-auto">
                    Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#services">
                  <Button variant="outline" className="w-full px-7 py-4 text-base sm:w-auto">
                    View Capabilities
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <Card className="rounded-[2rem] bg-white/10 shadow-2xl backdrop-blur">
                <div className="grid gap-4 p-8">
                  {[
                    [Radar, "Encoded PAUT / TOFD", "Long seam, girth weld, and advanced UT applications."],
                    [FileCheck, "Clear Reporting", "Client-ready documentation, job books, and inspection summaries."],
                    [HardHat, "Qualified Field Personnel", "Utility through chief inspectors, CWI, API, NACE, and NDT support."],
                    [MapPin, "Nationwide Coverage", "Responsive support across Ohio, Michigan, Pennsylvania, Illinois, the Midwest, and Northeast. With technicians located Nationwide"],
                  ].map(([Icon, title, text]) => (
                    <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-orange-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{title}</div>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">Core Services</div>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Built for field execution, not just paperwork.</h2>
            <p className="mt-4 text-slate-300">From routine NDE to advanced ultrasonic inspections, our focus is accurate data, practical answers, and fast turnaround.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map(([title, text]) => (
              <Card key={title} className="transition hover:bg-white/[0.09]">
                <div className="p-7">
                  <ShieldCheck className="mb-5 h-7 w-7 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="industries" className="border-y border-white/10 bg-slate-900/60">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">Industries Served</div>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Inspection support for critical infrastructure.</h2>
            </div>
            <div className="grid gap-3 text-slate-300 sm:grid-cols-2">
              {industries.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [ClipboardCheck, "Project Ready", "Built around scope clarity, documentation, and inspection execution."],
              [Factory, "Industrial Focus", "Pipeline, terminals, fabrication, outage, and integrity support."],
              [Wrench, "Practical Support", "Field-first inspection experience backed by professional reporting."],
            ].map(([Icon, title, text]) => (
              <Card key={title}>
                <div className="p-7">
                  <Icon className="mb-5 h-8 w-8 text-orange-400" />
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="coverage" className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">Coverage</div>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Strategically positioned for responsive field support.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Based in Ohio with inspection personnel positioned across multiple regions, Elevate supports projects throughout the Midwest, Northeast, and beyond when project scope requires it.
              </p>
            </div>
            <Card className="rounded-[2rem]">
              <div className="space-y-4 p-8">
                <div className="flex items-center gap-3 text-lg font-semibold text-white"><MapPin className="h-5 w-5 text-orange-400" /> Delaware, Ohio</div>
                <p className="leading-7 text-slate-400">Central location for pipeline, terminal, station, and fabrication support across key operating regions.</p>
                <div className="rounded-2xl bg-slate-950/70 p-5 text-sm text-slate-300">
                  Available for planned work, integrity campaigns, callouts, outage support, and project-based staffing.
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="contact" className="bg-orange-500 px-6 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">Need inspection support?</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-900/80">
                Send the scope, location, schedule, and required method. We’ll help clarify the request and build a practical quote.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-2xl">
              <div className="space-y-4 text-slate-800">
                <div className="flex items-center gap-3"><Phone className="h-5 w-5" /> (419) 575-1304</div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5" /> Tyler@elevateintegrity.com</div>
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Delaware, Ohio</div>
              </div>
              <a href="mailto:Tyler@elevateintegrity.com?subject=Inspection%20Quote%20Request">
                <Button className="mt-7 w-full bg-slate-950 py-4 text-base text-white hover:bg-slate-800">Start a Quote</Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Elevate Integrity Services. All rights reserved.</div>
          <div>NDT • PAUT • TOFD • Pipeline Integrity • Field Oversight</div>
        </div>
      </footer>
    </div>
  );
}
