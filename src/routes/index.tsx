import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Sparkles,
  FileText,
  Table,
  Presentation,
  Cloud,
  PenTool,
  Globe,
  Briefcase,
  Award,
  GraduationCap,
  Users,
  MessageSquare,
  ClipboardList,
  Headphones,
  Download,
  Calendar,
  Megaphone,
  Wrench,
  Layout,
  Facebook,
  Instagram,
  Video,
  Send,
  Loader2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


import fahmiaAsset from "@/assets/fahmia-nobg.png.asset.json";
import fahmiaLogo from "@/assets/fahmia-logo.png.asset.json";
import certBugsai from "@/assets/cert-bugsai.jpg.asset.json";
import certPython from "@/assets/cert-python.jpg.asset.json";
import certAsean from "@/assets/cert-asean.jpg.asset.json";
import certTree from "@/assets/cert-treeplanting.jpg.asset.json";

const FACEBOOK_URL = "https://www.facebook.com/ismeefahmia.bilay";
const INSTAGRAM_URL = "https://www.instagram.com/me_younggs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fahmia Bilay — Administrative Support & IS Student" },
      { name: "description", content: "Portfolio of Fahmia Bilay — BS Information Systems student where administrative support meets digital innovation." },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

type Achievement = {
  title: string;
  label?: string;
  cert?: string;
};

const achievements: Achievement[] = [
  {
    title: "Completed Operations and Administrative Internship at DOST-DNSC BUGSAI TBI (2026)",
    label: "Internship Certificate",
    cert: certBugsai.url,
  },
  {
    title: "ASEAN AI Hackathon 2026: Workshop on Human-Centric AI and Regional Problem Solving",
    label: "Hackathon Certificate",
    cert: certAsean.url,
  },
  {
    title: "Completed Python Essentials 1 — Cisco Networking Academy (2025)",
    label: "Course Certificate",
    cert: certPython.url,
  },
  {
    title: "Tree Planting Activity — Barangay Ising, Carmen, Davao del Norte (2026)",
    label: "Community Service Certificate",
    cert: certTree.url,
  },
  {
    title: "Completed Cash for Work at DNSC Registrar Office under KALAHI-CIDSS (2025)",
  },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [openCert, setOpenCert] = useState<Achievement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const offsets = navItems.map((n) => {
        const el = document.getElementById(n.id);
        if (!el) return { id: n.id, top: Infinity };
        return { id: n.id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCert(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2" aria-label="Fahmia — home">
            <img src={fahmiaLogo.url} alt="Fahmia logo" className="size-10 object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`px-3 py-2 rounded-full text-sm transition-colors ${
                  active === n.id
                    ? "bg-gradient-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Let's Talk <ArrowUpRight className="size-4" />
          </a>
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/80 backdrop-blur-xl">
            <div className="px-5 py-3 flex flex-col gap-1">
              {navItems.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm hover:bg-muted"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero -z-10" />
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" /> Available for opportunities
            </span>
            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-extrabold tracking-tight">
              Hi there, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Fahmia
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Where administrative support meets digital innovation.
            </p>
            <p className="mt-3 text-sm font-medium tracking-wide uppercase text-foreground/70">
              Administrative Support · Aspiring Professional
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Get in touch <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-muted/40 transition"
              >
                <Download className="size-4" /> View experience
              </a>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="size-4 text-primary" /> Lupon, Davao Oriental</div>
              <div className="flex items-center gap-2"><Phone className="size-4 text-primary" /> 0916 967 0065</div>
              <div className="flex items-center gap-2 truncate"><Mail className="size-4 text-primary shrink-0" /> Bilay.fahmia@dnsc.edu.ph</div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Follow</span>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook — Fahmia Bilay"
                className="inline-flex size-10 items-center justify-center rounded-full glass hover:bg-gradient-primary hover:text-primary-foreground transition"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — @me_younggs"
                className="inline-flex size-10 items-center justify-center rounded-full glass hover:bg-gradient-primary hover:text-primary-foreground transition"
              >
                <Instagram className="size-4" />
              </a>

            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="size-[420px] max-w-full rounded-full bg-gradient-primary opacity-30 blur-3xl" />
            </div>
            <div className="relative aspect-square max-w-md mx-auto flex items-end justify-center">
              <div className="absolute inset-4 rounded-full border border-primary/30" />
              <div className="absolute inset-10 rounded-full border border-primary/20" />
              <img
                src={fahmiaAsset.url}
                alt="Fahmia Bilay portrait"
                className="relative size-full object-contain drop-shadow-2xl animate-float"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-2 -left-2 sm:left-4 rounded-2xl glass px-4 py-3 shadow-soft">
              <p className="text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-semibold">BS Information Systems</p>
            </div>
            <div className="absolute -top-2 -right-2 sm:right-4 rounded-2xl glass px-4 py-3 shadow-soft animate-float">
              <p className="text-xs text-muted-foreground">Based in</p>
              <p className="text-sm font-semibold">Davao Oriental, PH</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About Me" title="A little about who I am">
        <div className="rounded-3xl glass shadow-card p-6 md:p-10 lg:p-12">
          <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="md:col-span-2 relative">
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="size-72 rounded-full bg-gradient-primary opacity-25 blur-3xl" />
              </div>
              <div className="relative aspect-square rounded-full overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent flex items-end justify-center">
                <img
                  src={fahmiaAsset.url}
                  alt="Fahmia Bilay"
                  className="size-full object-contain"
                />
              </div>
            </div>
            <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Motivated and detail-oriented{" "}
                <span className="text-foreground font-medium">
                  Bachelor of Science in Information Systems
                </span>{" "}
                student with experience in administrative support, clerical work, and customer service.
              </p>
              <p>
                Passionate about learning new technologies, improving organizational processes, and contributing to professional and collaborative environments.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Stat value="2+" label="Internships" />
            <Stat value="5+" label="Achievements" />
            <Stat value="6+" label="Tools Proficiency" />
            <Stat value="100%" label="Dedication" />
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills & Tools" title="What I bring to the table">
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-xl font-semibold mb-5">Core Skills</h3>
            <ul className="space-y-3">
              {[
                { icon: ClipboardList, label: "Clerical Support" },
                { icon: Headphones, label: "Customer Service" },
                { icon: FileText, label: "Microsoft Office Proficiency" },
                { icon: MessageSquare, label: "Communication Skills" },
                { icon: Users, label: "Administrative Skills" },
              ].map((s) => (
                <li key={s.label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <s.icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium">{s.label}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold mb-5">Tools & Platforms</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: FileText, label: "Microsoft Office Suite" },
                { icon: Cloud, label: "Google Workspace" },
                { icon: PenTool, label: "Canva" },
                { icon: Video, label: "Zoom" },
                { icon: Video, label: "Google Meet" },
                { icon: Users, label: "Microsoft Teams" },
                { icon: Globe, label: "Email & Web" },
                { icon: Cloud, label: "Dropbox" },
                { icon: MessageSquare, label: "Skype" },
                { icon: MessageSquare, label: "Discord" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl glass hover:-translate-y-0.5 transition"
                >
                  <t.icon className="size-7 text-primary transition-transform group-hover:scale-110" />
                  <span className="text-xs font-medium text-center">{t.label}</span>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" eyebrow="My Services" title="What I can offer">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: ClipboardList,
              title: "Administrative Support",
              desc: "Reliable day-to-day office assistance, file organization, and clerical workflows tailored to your team.",
            },
            {
              icon: FileText,
              title: "Document Preparation",
              desc: "Formatting, proofreading, and producing polished reports, letters, and forms with MS Office.",
            },
            {
              icon: Table,
              title: "Data Entry & Encoding",
              desc: "Accurate, detail-oriented encoding into spreadsheets and databases with quality checks.",
            },
            {
              icon: Headphones,
              title: "Customer Service",
              desc: "Professional and friendly assistance via phone, email, and in-person inquiries.",
            },
            {
              icon: Calendar,
              title: "Scheduling & Coordination",
              desc: "Calendar management, meeting setup, and follow-ups to keep operations on track.",
            },
            {
              icon: PenTool,
              title: "Canva Design Support",
              desc: "Simple posters, certificates, and social media graphics for events and announcements.",
            },
            {
              icon: Layout,
              title: "Presentation Design",
              desc: "Clean, well-structured PowerPoint and Google Slides decks for school or office needs.",
            },
            {
              icon: Megaphone,
              title: "Email & Communication",
              desc: "Drafting professional emails, memos, and announcements with clarity and proper tone.",
            },
            {
              icon: Wrench,
              title: "Office Operations Assistance",
              desc: "Helping coordinate documentation and admin tasks to support smooth daily operations.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl glass p-6 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition group"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <s.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="Work Experience" title="Where I've contributed">
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-start gap-4">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shrink-0">
                <Briefcase className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">Feb – May 2026</p>
                <h3 className="mt-1 text-lg font-semibold">Operations & Administrative Intern</h3>
                <p className="text-sm text-muted-foreground">DOST-DNSC BUGSAI TBI</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Assisted in operations management, documentation, and administrative coordination.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/20 text-primary shrink-0">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary">Jun – Jul 2025</p>
                <h3 className="mt-1 text-lg font-semibold">Registrar Office — Cash for Work</h3>
                <p className="text-sm text-muted-foreground">KALAHI-CIDSS · DNSC Main Campus, Panabo City</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Provided clerical and administrative support while assisting with office operations and documentation.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
            <Award className="size-5 text-primary" /> Achievements
            <span className="text-xs font-normal text-muted-foreground ml-2">(click to view certificate)</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((a) => {
              const clickable = !!a.cert;
              return (
                <button
                  key={a.title}
                  type="button"
                  onClick={() => clickable && setOpenCert(a)}
                  disabled={!clickable}
                  className={`text-left flex gap-3 p-4 rounded-xl glass transition ${
                    clickable
                      ? "hover:shadow-card hover:-translate-y-0.5 cursor-pointer"
                      : "opacity-80 cursor-default"
                  }`}
                >
                  <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">
                    <Sparkles className="size-3" />
                  </span>
                  <div className="flex-1">
                    {a.label && (
                      <p className="text-[10px] uppercase tracking-wider text-primary/80 font-semibold mb-1">{a.label}</p>
                    )}
                    <p className="text-sm leading-relaxed">{a.title}</p>
                    {clickable && (
                      <p className="mt-2 text-xs text-primary inline-flex items-center gap-1">
                        View certificate <ArrowUpRight className="size-3" />
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's connect">
        <div className="rounded-3xl glass shadow-card p-8 lg:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactItem icon={Phone} label="Phone" value="0916 967 0065" href="tel:09169670065" />
            <ContactItem icon={Mail} label="Email" value="Bilay.fahmia@dnsc.edu.ph" href="mailto:Bilay.fahmia@dnsc.edu.ph" />
            <ContactItem icon={MapPin} label="Address" value="Purok Lawis, Ilangay, Lupon, Davao Oriental" />
            <ContactItem
              icon={Facebook}
              label="Facebook"
              value="Fahmia Bilay"
              href={FACEBOOK_URL}
              external
            />
            <ContactItem
              icon={Instagram}
              label="Instagram"
              value="@me_younggs"
              href={INSTAGRAM_URL}
              external
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ContactDialog />
            <a
              href="tel:09169670065"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-muted/40 transition"
            >
              <Phone className="size-4" /> Call directly
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-muted/40 transition"
            >
              <Facebook className="size-4" /> Facebook
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-muted/40 transition"
            >
              <Instagram className="size-4" /> Instagram
            </a>
          </div>

        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border mt-12">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={fahmiaLogo.url} alt="Fahmia logo" className="size-9 object-contain" />
          </div>

          <p className="text-sm italic text-muted-foreground">"Inspiring Change, Creating Futures"</p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Fahmia Bilay</p>
        </div>
      </footer>

      {/* CERTIFICATE MODAL */}
      {openCert && openCert.cert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-up"
          onClick={() => setOpenCert(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden glass shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenCert(null)}
              className="absolute top-3 right-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-background/80 hover:bg-background border border-border"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
            <img
              src={openCert.cert}
              alt={openCert.title}
              className="w-full h-auto max-h-[80vh] object-contain bg-white"
            />
            <div className="p-4 text-sm text-muted-foreground border-t border-border">
              {openCert.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 lg:py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">{eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">{title}</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-primary" />
        </div>
        {children}
      </div>
    </section>

  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl glass p-6 lg:p-8 shadow-soft hover:shadow-card transition">
      {children}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl glass p-5 text-center shadow-soft">
      <p className="text-2xl lg:text-3xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary shrink-0">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-medium break-words">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block p-4 rounded-xl hover:bg-white/5 transition"
    >
      {content}
    </a>
  ) : (
    <div className="p-4">{content}</div>
  );
}

function ContactDialog() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const mailto = `mailto:Bilay.fahmia@dnsc.edu.ph?subject=${subject}&body=${body}`;
    // open user's mail client
    window.location.href = mailto;
    setTimeout(() => {
      setSending(false);
      setOpen(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 600);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition"
        >
          Send a message <ArrowUpRight className="size-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="glass border-border/60 bg-card/80 backdrop-blur-xl sm:max-w-md p-0 overflow-hidden">
        <div className="bg-gradient-primary px-6 py-5 text-primary-foreground">
          <DialogHeader>
            <DialogTitle className="text-xl font-extrabold tracking-tight">
              Send me a message
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/80 text-sm">
              Fill in the form below and I'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="cd-name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
            <input
              id="cd-name"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your full name"
              className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="cd-email" className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
            <input
              id="cd-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="cd-subject" className="text-xs uppercase tracking-wider text-muted-foreground">Subject</label>
            <input
              id="cd-subject"
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              placeholder="What's this about?"
              className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="cd-message" className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              id="cd-message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Write your message here…"
              className="w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            {sending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
            {sending ? "Opening mail…" : "Send message"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
