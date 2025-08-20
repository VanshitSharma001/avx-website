import { motion } from "framer-motion";
import { Rocket, Smartphone, Globe, Megaphone, Search, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AVXLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-white/10 grid place-items-center font-bold">A</div>
            <span className="text-xl font-semibold tracking-widest">AVX</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact"><Button className="rounded-2xl">Get Proposal</Button></a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,102,255,0.35),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(0,255,204,0.25),transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build. Brand. <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Scale.</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg md:text-xl max-w-xl">
              AVX is a lean studio by Vanshit & Aman. We craft lightning-fast apps, premium web experiences, and growth engines powered by research.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact"><Button size="lg" className="rounded-2xl">Start a Project <ArrowRight className="ml-2 h-4 w-4"/></Button></a>
              <a href="#work"><Button size="lg" variant="secondary" className="rounded-2xl bg-white text-black hover:bg-white/90">View Work</Button></a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> On-time Delivery</div>
              <div className="flex items-center gap-2"><Rocket className="h-4 w-4"/> Performance First</div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:0.97}} animate={{opacity:1,scale:1}} transition={{duration:0.6, delay:0.1}} className="">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-40 blur"/>
              <div className="relative rounded-3xl border border-white/10 p-6 bg-white/5 shadow-2xl">
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-tr from-white/10 to-white/0 grid place-items-center text-center">
                  <p className="px-6 text-white/80">Drop your logo here later. Hero mockup area for app screenshots or website preview.</p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/70">
                  <div className="rounded-xl border border-white/10 p-3">Android • iOS</div>
                  <div className="rounded-xl border border-white/10 p-3">React • Next.js</div>
                  <div className="rounded-xl border border-white/10 p-3">Firebase • Cloud</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
          <p className="text-white/70 mt-2 max-w-2xl">Full-stack delivery from idea → research → design → code → launch. Pick your stack, we'll ship.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            <ServiceCard icon={<Smartphone className="h-6 w-6"/>} title="App Development" desc="Android/iOS apps with realtime chat, payments, and offline-first performance."/>
            <ServiceCard icon={<Globe className="h-6 w-6"/>} title="Web Development" desc="Next.js sites, dashboards, and SaaS with SEO and blazing TTI."/>
            <ServiceCard icon={<Megaphone className="h-6 w-6"/>} title="Branding & Marketing" desc="Identity, content, ad funnels, and launch campaigns that convert."/>
            <ServiceCard icon={<Search className="h-6 w-6"/>} title="Research & Strategy" desc="Market scans, competitor maps, pricing playbooks, and product roadmaps."/>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-5">
            {[
              {step:"01", title:"Discover", text:"Call + brief + success metrics defined."},
              {step:"02", title:"Plan", text:"Research, architecture, timeline & quote."},
              {step:"03", title:"Build", text:"Design → code → test → iterate fast."},
              {step:"04", title:"Launch", text:"Deploy, measure, optimize, grow."},
            ].map((s)=> (
              <Card key={s.step} className="rounded-2xl bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{s.title}</span>
                    <span className="text-white/30 text-xl">{s.step}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/70">{s.text}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work / Showcase */}
      <section id="work" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Showcase</h2>
          <p className="text-white/70 mt-2">Pin your best builds here. Replace these with live case studies later.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {["UP Chat – Realtime Messaging","AVX Site – Next.js Landing","AVX Nova – AI Assistant"].map((title, i)=> (
              <motion.div key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.1}} className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500/40 to-blue-600/40 blur"/>
                <Card className="relative rounded-2xl bg-black border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-[16/10] rounded-xl bg-white/5 grid place-items-center text-white/60 text-sm">
                      Preview / screenshot placeholder
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Founders</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <FounderCard name="Vanshit Sharma" title="CEO & CFO • Lead Developer" bio="Leads vision, finance and full‑stack product builds across Android, web and cloud."/>
            <FounderCard name="Aman" title="CMO & CRO" bio="Owns brand, marketing funnels and deep research for product-market fit and growth."/>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Start a Project</h2>
          <p className="text-center text-white/70 mt-2">Tell us what you want to build. We'll reply with a plan and a quote.</p>

          <form onSubmit={(e)=> e.preventDefault()} className="mt-10 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Your name" className="bg-black/60 border-white/15" />
              <Input type="email" placeholder="Email or phone" className="bg-black/60 border-white/15" />
            </div>
            <Select>
              <SelectTrigger className="bg-black/60 border-white/15">
                <SelectValue placeholder="Budget range" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border-white/10">
                <SelectItem value="under25">Under ₹25k</SelectItem>
                <SelectItem value="25-75">₹25k – ₹75k</SelectItem>
                <SelectItem value="75-200">₹75k – ₹2L</SelectItem>
                <SelectItem value="200+">₹2L+</SelectItem>
              </SelectContent>
            </Select>
            <Textarea rows={6} placeholder="Tell us about your project (goals, deadline, features)" className="bg-black/60 border-white/15" />
            <div className="flex items-center justify-between">
              <p className="text-xs text-white/50">By submitting, you agree to be contacted by AVX.
              </p>
              <Button type="submit" className="rounded-2xl">Send Message</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-2xl bg-white/10 grid place-items-center font-bold">A</div>
            <span className="text-sm text-white/70">© {new Date().getFullYear()} AVX. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5 text-sm text-white/70">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">X (Twitter)</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="rounded-2xl bg-white/5 border-white/10 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-lg">
          <span className="p-2 rounded-xl bg-white/10">{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-white/70">{desc}</CardContent>
    </Card>
  );
}

function FounderCard({ name, title, bio }: { name: string; title: string; bio: string }) {
  return (
    <Card className="rounded-2xl bg-white/5 border-white/10">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 rounded-2xl bg-white/10 grid place-items-center text-lg font-semibold">
            {name.split(" ").map(n=>n[0]).join("")}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-white/60 text-sm">{title}</p>
            <p className="text-white/70 mt-2 text-sm">{bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
