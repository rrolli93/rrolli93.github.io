"use client";

import { useEffect, useRef, useState } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const PROFILE =
  "Biotechnologist and founder with an M.Sc. in Bioengineering from EPFL and hands-on R&D leadership across ventures in Switzerland and Germany. I have run wet labs and the companies around them, and I currently lead the science behind an autonomous AI agent for peptide drug discovery — designing experimental pipelines, structured data systems, and AI agents that accelerate research. I move fluently between scientists, engineers, and executives, and I am at my best turning ambiguous scientific problems into structured, repeatable workflows.";

const FOCUS = [
  "AI Drug Discovery",
  "Peptide Therapeutics",
  "Enzymatic Biosynthesis",
  "Longevity & Brain Health",
  "Synthetic Biology",
  "Decentralized Science",
];

const EXPERIENCE = [
  {
    period: "12/2025 — PRESENT",
    title: "Science Lead & Co-Founder",
    org: "PeptAI",
    orgHref: null,
    note: "Spin-out from the Molecule AG ecosystem · Remote",
    desc: "Co-founded and lead the science behind an autonomous, AI-driven peptide drug-discovery platform — from target selection through computational prediction to wet-lab validation. Designed the end-to-end pipeline as a staged workflow with decision gates and data standards, and built AI agents directly into research execution to compress discovery cycles.",
  },
  {
    period: "02/2025 — PRESENT",
    title: "Head of Science & AI",
    org: "Molecule AG",
    orgHref: "https://molecule.to",
    note: "Remote",
    desc: "Run customer discovery for BIOS, an AI research tool, translating user needs into prioritized features. Lead biotech partnerships and deal flow, facilitate tech transfer with universities, and source projects across longevity, brain health, synthetic biology, and peptide drug discovery.",
  },
  {
    period: "10/2021 — 02/2024",
    title: "Co-Founder & Head of R&D",
    org: "Infinit Biosystems GmbH",
    orgHref: null,
    note: "Berlin, Germany",
    desc: "Co-founded and ran an enzymatic biosynthesis company for psychedelic API production, leading both the wet lab and company operations from formation through multiple funding rounds. Used Benchling as the team's R&D system of record and ensured EU regulatory compliance.",
  },
  {
    period: "10/2021 — 03/2022",
    title: "Entrepreneur in Residence",
    org: "Antler",
    orgHref: "https://www.antler.co",
    note: "Berlin, Germany",
    desc: "Developed and pitched scalable biotech solutions, securing pre-seed funding and validating market potential.",
  },
  {
    period: "07/2020 — 09/2021",
    title: "Co-Founder",
    org: "Eir Drop Biosciences",
    orgHref: null,
    note: "EPFL spin-off · Lausanne",
    desc: "Developed scalable cell-free biosynthesis systems for natural ingredients, applying machine-learning models to simulate and validate genetic sequences and accelerate research cycles.",
  },
  {
    period: "06/2019 — 06/2020",
    title: "Cannabis Chemist & Laboratory Director",
    org: "Alponics SA",
    orgHref: null,
    note: "Martigny, Switzerland",
    desc: "Ran lab operations in full ISO/GMP compliance, performed QA/QC analytical testing, and developed extraction and infusion techniques including supercritical CO₂ extraction.",
  },
];

const PROJECTS = [
  {
    name: "PEPTAI",
    tag: "ACTIVE",
    tagColor: "#00ff88",
    role: "SCIENCE LEAD & CO-FOUNDER",
    desc: "Autonomous AI-driven peptide drug-discovery platform. Generative models for sequence design, structure prediction, and wet-lab prioritization, wired into a staged pipeline with decision gates — from target to candidate.",
    chips: ["AI AGENTS", "DRUG DISCOVERY", "PEPTIDES", "PIPELINE DESIGN"],
    href: null,
  },
  {
    name: "BIOS // MOLECULE",
    tag: "LIVE",
    tagColor: "#00ff88",
    role: "HEAD OF SCIENCE & AI",
    desc: "AI research tool inside the Molecule ecosystem connecting IP-NFT research funding with biotech founders. I lead customer discovery and translate user needs into a prioritized product roadmap.",
    chips: ["DESCI", "AI RESEARCH", "PARTNERSHIPS", "PRODUCT"],
    href: "https://molecule.to",
  },
  {
    name: "BIOAGE",
    tag: "SIDE PROJECT",
    tagColor: "#ff9944",
    role: "BUILDER",
    desc: "Biological-age tracking app. Log bloodwork, compute phenotypic age with validated algorithms, and monitor your trajectory over time. A personal experiment in everyday longevity tooling.",
    chips: ["LONGEVITY", "BIOMARKERS", "REACT", "HEALTH"],
    href: "https://bioage-mu.vercel.app",
  },
];

const ACHIEVEMENTS = [
  "Raised $170K pre-seed (Antler) and $250K seed (Berlin Founders Fund) across ventures.",
  "Co-invented a cell-free biosynthesis platform using machine learning to optimize small-molecule production for cannabinoids and tryptamines.",
  "Consulted for biotech startups integrating AI into protein-engineering cycles — sequence design, protocol planning, and autonomous experimentation.",
  "Led cross-functional teams and partnerships across English-, French-, Spanish-, and German-speaking regions.",
];

const EDUCATION = [
  {
    school: "École Polytechnique Fédérale de Lausanne (EPFL)",
    degree: "M.Sc. — Bioengineering & Biomedical Engineering",
    detail: "Master thesis: Cardiac Mechanics — University of California, San Diego",
    period: "2016 — 2018",
  },
  {
    school: "École Polytechnique Fédérale de Lausanne (EPFL)",
    degree: "B.Sc. — Bioengineering & Biomedical Engineering",
    detail: "",
    period: "2013 — 2016",
  },
  {
    school: "Innosuisse Biotech Business Creation — EPFL",
    degree: "Certificate",
    detail: "Intensive program preparing scientists to found and run companies in Switzerland and the EU.",
    period: "2020",
  },
];

const SKILLS = [
  { group: "R&D & Scientific", items: "Wet-lab R&D · Experimental design · GMP / ISO compliance · QA/QC analytical testing · Enzymatic biosynthesis" },
  { group: "AI & Platforms", items: "AI-driven drug discovery · AI agent development · AI-assisted sequence design · Benchling · BIOS · Python" },
  { group: "Leadership & Ops", items: "Strategic planning · Fundraising · Operations · Cross-functional leadership · Customer & stakeholder management" },
  { group: "Languages", items: "Spanish (native) · English (fluent) · French (fluent) · German (professional)" },
];

const CONTACT = {
  email: "rafael.rolli.galaxy@gmail.com",
  linkedin: "https://www.linkedin.com/in/rafael-alain-rolli/",
  github: "https://github.com/rrolli93",
  resume: "/Rafael_Rolli_CV.pdf",
};

// ─── Primitives ──────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em",
      color: "var(--accent)", textTransform: "uppercase",
      marginBottom: "20px", fontFamily: "var(--font)",
    }}>
      {"// "}{children}
    </p>
  );
}

function Badge({ label, color }: { label: string; color?: string }) {
  return (
    <span style={{
      fontSize: "9px", fontWeight: 700, letterSpacing: "0.16em",
      padding: "2px 8px",
      border: `1px solid ${color || "rgba(0,255,136,0.35)"}`,
      color: color || "var(--accent)",
      background: `${color || "var(--accent)"}12`,
      textTransform: "uppercase",
      fontFamily: "var(--font)",
      whiteSpace: "nowrap",
    }}>{label}</span>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span style={{
      fontSize: "9px", letterSpacing: "0.12em",
      padding: "2px 7px",
      border: "1px solid var(--border)",
      color: "var(--text-secondary)",
      textTransform: "uppercase",
      fontFamily: "var(--font)",
    }}>{label}</span>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: "var(--bg-card)",
      border: "1px solid var(--border)",
      padding: "24px",
      transition: "border-color 0.2s",
      ...style,
    }}
    onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-bright)")}
    onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
    >{children}</div>
  );
}

function Cursor() {
  return (
    <span style={{
      display: "inline-block",
      width: "9px", height: "16px",
      background: "var(--accent)",
      verticalAlign: "middle",
      marginLeft: "4px",
      animation: "blink 1.1s step-end infinite",
    }} />
  );
}

function FadeIn({ children, delay = 0, full = false, style }: { children: React.ReactNode; delay?: number; full?: boolean; style?: React.CSSProperties }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      gridColumn: full ? "1 / -1" : undefined,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "EMAIL", href: `mailto:${CONTACT.email}` },
  { label: "LINKEDIN", href: CONTACT.linkedin },
  { label: "GITHUB", href: CONTACT.github },
  { label: "RÉSUMÉ", href: CONTACT.resume, accent: true },
];

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", fontFamily: "var(--font)" }}>

      {/* ── NAV ── */}
      <header style={{
        borderBottom: "1px solid var(--border)",
        padding: "14px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0,
        background: "rgba(8,8,8,0.92)",
        backdropFilter: "blur(16px)",
        zIndex: 100,
        flexWrap: "wrap", gap: "10px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{
            display: "inline-block", width: "7px", height: "7px",
            borderRadius: "50%", background: "var(--accent)",
            boxShadow: "0 0 8px var(--accent)",
            animation: "blink 2s ease-in-out infinite",
          }} />
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", color: "var(--text)" }}>
            RAFAEL ROLLI <span style={{ color: "var(--text-muted)" }}>// BIOTECH × AI</span>
          </span>
        </div>
        <nav style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{
              fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em",
              color: l.accent ? "var(--accent)" : "var(--text-secondary)",
              padding: "5px 12px",
              border: `1px solid ${l.accent ? "var(--border-bright)" : "var(--border)"}`,
              transition: "all 0.15s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-bright)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = l.accent ? "var(--accent)" : "var(--text-secondary)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = l.accent ? "var(--border-bright)" : "var(--border)";
            }}
            >{l.label}</a>
          ))}
        </nav>
      </header>

      <main style={{ maxWidth: "1020px", margin: "0 auto", padding: "2px 24px 80px" }}>

        <div className="portfolio-grid">

          {/* ── HERO / PROFILE ── */}
          <FadeIn delay={0} full>
            <Card>
              <SectionLabel>PROFILE &nbsp;<span style={{ color: "var(--accent)" }}>OPEN TO OPPORTUNITIES</span></SectionLabel>
              <h1 style={{
                fontSize: "clamp(28px, 4.4vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: "14px",
                fontFamily: "var(--font)",
              }}>
                Rafael Alain Rolli<Cursor />
              </h1>
              <p style={{
                fontSize: "clamp(13px, 1.7vw, 16px)",
                color: "var(--accent)",
                lineHeight: 1.5,
                marginBottom: "20px",
                fontWeight: 500,
                maxWidth: "720px",
              }}>
                Biotechnologist &amp; founder turning ambiguous science into structured, AI-accelerated workflows.
              </p>
              <p style={{
                fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.8,
                maxWidth: "760px", marginBottom: "22px",
              }}>
                {PROFILE}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "5px 14px", maxWidth: "640px", marginBottom: "22px" }}>
                {[
                  ["> Role", "Science & R&D leadership · AI × Bio · Founder"],
                  ["> Based", "Zurich, Switzerland · Swiss citizen · remote-friendly"],
                  ["> Education", "M.Sc. Bioengineering, EPFL"],
                ].map(([k, v]) => (
                  <div key={k as string} style={{ display: "contents" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "11px", whiteSpace: "nowrap" }}>{k}</span>
                    <span style={{ color: "var(--text-secondary)", fontSize: "11px" }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <a href={CONTACT.resume} target="_blank" rel="noreferrer" style={{
                  fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
                  color: "#000", background: "var(--accent)",
                  padding: "8px 16px", textTransform: "uppercase",
                }}>↓ Download Résumé</a>
                <a href={`mailto:${CONTACT.email}`} style={{
                  fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em",
                  color: "var(--accent)", border: "1px solid var(--border-bright)",
                  padding: "8px 16px", textTransform: "uppercase",
                }}>Get in touch →</a>
              </div>
            </Card>
          </FadeIn>

          {/* ── FOCUS ── */}
          <FadeIn delay={50}>
            <Card style={{ height: "100%" }}>
              <SectionLabel>FOCUS AREAS</SectionLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {FOCUS.map(f => (
                  <span key={f} style={{
                    fontSize: "11px", letterSpacing: "0.04em",
                    padding: "6px 12px",
                    border: "1px solid var(--border-bright)",
                    color: "var(--text)",
                    background: "var(--accent-dim)",
                  }}>{f}</span>
                ))}
              </div>
            </Card>
          </FadeIn>

          {/* ── SKILLS ── */}
          <FadeIn delay={100}>
            <Card style={{ height: "100%" }}>
              <SectionLabel>SKILLS</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {SKILLS.map(s => (
                  <div key={s.group}>
                    <div style={{ fontSize: "10px", color: "var(--accent)", letterSpacing: "0.1em", marginBottom: "4px", textTransform: "uppercase" }}>
                      {s.group}
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                      {s.items}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>

          {/* ── EXPERIENCE ── */}
          <FadeIn delay={120} full>
            <Card>
              <SectionLabel>EXPERIENCE</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
                {EXPERIENCE.map((c, i) => (
                  <div key={i} style={{
                    paddingLeft: "16px",
                    borderLeft: `2px solid ${i === 0 ? "var(--accent)" : "var(--border)"}`,
                  }}>
                    <div style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.14em", marginBottom: "4px" }}>
                      {c.period}
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap", marginBottom: "3px" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: i === 0 ? "var(--accent)" : "var(--text)" }}>
                        {c.title}
                      </span>
                      <span style={{ color: "var(--text-muted)" }}>·</span>
                      {c.orgHref
                        ? <a href={c.orgHref} target="_blank" rel="noreferrer"
                            style={{ fontSize: "12px", color: "var(--accent)" }}>{c.org}</a>
                        : <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{c.org}</span>
                      }
                    </div>
                    <div style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "8px" }}>
                      {c.note}
                    </div>
                    <p style={{ fontSize: "11px", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "820px" }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>

          {/* ── PROJECTS ── */}
          <FadeIn delay={150} full>
            <Card style={{ padding: "24px 24px 10px" }}>
              <SectionLabel>PROJECTS</SectionLabel>
            </Card>
          </FadeIn>
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.name} delay={170 + i * 50} full={i === 2} style={{ height: "100%" }}>
              <Card style={{ height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <h3 style={{
                    fontSize: "17px", fontWeight: 700, letterSpacing: "0.04em",
                    color: "#fff", fontFamily: "var(--font)",
                  }}>{p.name}</h3>
                  <Badge label={p.tag} color={p.tagColor} />
                </div>
                <p style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.14em", marginBottom: "12px" }}>
                  ROLE: {p.role}
                </p>
                <p style={{ fontSize: "11px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "16px" }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {p.chips.map(ch => <Chip key={ch} label={ch} />)}
                </div>
                {p.href && (
                  <a href={p.href} target="_blank" rel="noreferrer" style={{
                    display: "inline-block",
                    marginTop: "16px",
                    fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em",
                    color: "var(--accent)",
                    border: "1px solid var(--border-bright)",
                    padding: "5px 14px",
                  }}>OPEN →</a>
                )}
              </Card>
            </FadeIn>
          ))}

          {/* ── ACHIEVEMENTS ── */}
          <FadeIn delay={200} full>
            <Card>
              <SectionLabel>ACHIEVEMENTS</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {ACHIEVEMENTS.map((a, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "10px", color: "var(--accent)", minWidth: "24px", fontWeight: 600, letterSpacing: "0.06em" }}>
                      0{idx + 1}
                    </span>
                    <span style={{ fontSize: "11.5px", color: "var(--text-secondary)", lineHeight: 1.65 }}>{a}</span>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>

          {/* ── EDUCATION ── */}
          <FadeIn delay={230} full>
            <Card>
              <SectionLabel>EDUCATION</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {EDUCATION.map((e, idx) => (
                  <div key={idx} style={{ display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                    <div style={{ maxWidth: "680px" }}>
                      <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--text)" }}>{e.degree}</div>
                      <div style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "2px" }}>{e.school}</div>
                      {e.detail && <div style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "4px", lineHeight: 1.6 }}>{e.detail}</div>}
                    </div>
                    <div style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>{e.period}</div>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>

          {/* ── CONTACT / CTA ── */}
          <FadeIn delay={260} full>
            <Card style={{ textAlign: "center", padding: "40px 24px" }}>
              <SectionLabel>CONTACT</SectionLabel>
              <h2 style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", marginBottom: "10px" }}>
                Let&apos;s build something.
              </h2>
              <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto 24px" }}>
                Open to science &amp; R&amp;D leadership, AI × bio, and founding roles. If you&apos;re working on hard scientific problems, I&apos;d like to hear about it.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
                {[
                  { label: "EMAIL", href: `mailto:${CONTACT.email}`, primary: true },
                  { label: "LINKEDIN", href: CONTACT.linkedin },
                  { label: "GITHUB", href: CONTACT.github },
                  { label: "RÉSUMÉ ↓", href: CONTACT.resume },
                ].map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{
                    fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
                    padding: "9px 18px", textTransform: "uppercase",
                    color: l.primary ? "#000" : "var(--accent)",
                    background: l.primary ? "var(--accent)" : "transparent",
                    border: l.primary ? "1px solid var(--accent)" : "1px solid var(--border-bright)",
                  }}>{l.label}</a>
                ))}
              </div>
            </Card>
          </FadeIn>

        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid var(--border)",
        padding: "16px 32px",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px",
      }}>
        <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
          STATUS: <span style={{ color: "var(--accent)" }}>OPEN TO OPPORTUNITIES</span>
        </span>
        <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
          © 2026 RAFAEL ALAIN ROLLI · ZURICH, CH
        </span>
      </footer>

    </div>
  );
}
