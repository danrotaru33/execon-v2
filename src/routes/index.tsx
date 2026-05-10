import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { services, projects } from "@/components/site/data";
import heroImg from "@/assets/hero-robot.jpg";
import energyImg from "@/assets/energy.jpg";
import factoryImg from "@/assets/factory.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Execon Engineering — Robotică, automatizări și energie" },
      { name: "description", content: "Proiectăm și executăm linii de fabricație, celule robotizate și centrale fotovoltaice pentru industrie. Cluj-Napoca & Brașov." },
      { property: "og:image", content: "/og-home.jpg" },
    ],
  }),
});

const imgMap = { robot: heroImg, energy: energyImg, factory: factoryImg };

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Engineering · Robotică · Energie · din 2010
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight text-balance"
            >
              Construim <span className="text-gradient-cyan">fabrica</span><br />
              de mâine. Astăzi.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              De la integrarea unui robot la antrepriză generală — Execon livrează
              soluții complete pentru industrie și energie, end-to-end.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-medium text-primary-foreground glow hover:translate-y-[-1px] transition"
              >
                Discută cu un inginer <ArrowRight size={16} />
              </Link>
              <Link
                to="/proiecte"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface/40 px-5 py-3 font-medium hover:bg-surface transition"
              >
                Vezi proiectele
              </Link>
            </motion.div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "15+", v: "ani de experiență" },
                { k: "200+", v: "proiecte livrate" },
                { k: "23 MW", v: "energie instalată" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl font-semibold text-foreground">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-border">
              <img
                src={heroImg}
                alt="Braț robotic industrial Execon în acțiune"
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-primary">// CASE STUDY</div>
                  <div className="font-display text-lg mt-1">Celulă sudură robotizată</div>
                </div>
                <div className="rounded-sm bg-background/70 backdrop-blur px-2 py-1 font-mono text-[10px]">EX-024</div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-accent/30 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-px bg-border overflow-hidden">
          {[
            { title: "Roboți & Linii de fabricație", desc: "Cresterea calității, eficienței și siguranței prin proiectare, execuție și optimizare a liniilor de producție.", img: factoryImg, to: "/servicii" },
            { title: "Energie regenerabilă", desc: "Centrale fotovoltaice EPC — proiectare, autorizare, execuție și mentenanță, de la 2 MW la 20+ MW.", img: energyImg, to: "/servicii" },
          ].map((d) => (
            <Link key={d.title} to={d.to} className="group relative bg-background p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <img src={d.img} alt="" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              </div>
              <div className="relative">
                <div className="font-mono text-xs text-primary tracking-widest">DIVIZIE</div>
                <h3 className="mt-2 font-display text-3xl">{d.title}</h3>
                <p className="mt-3 text-muted-foreground max-w-md">{d.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-foreground">
                  Explorează <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="font-mono text-xs text-primary tracking-widest">// SERVICII</div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-tight max-w-2xl text-balance">
              O echipă multidisciplinară. Un singur partener.
            </h2>
          </div>
          <Link to="/servicii" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
            Toate serviciile <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden border border-border">
          {services.map((s) => (
            <div key={s.title} className="group bg-background p-7 hover:bg-surface transition-colors">
              <s.icon className="text-primary" size={28} strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs text-primary tracking-widest">// PROCES</div>
            <h2 className="mt-2 font-display text-4xl tracking-tight">
              De la concept la producție în 6 pași.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Metodologie iterativă, transparentă, validată pe 200+ proiecte livrate
              clienților din automotive, FMCG și energie.
            </p>
          </div>
          <ol className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border rounded-md overflow-hidden">
            {[
              "Analiza fluxului de producție",
              "Identificarea cerințelor",
              "Alegerea soluției optime",
              "Proiectare & simulare 3D",
              "Execuție & integrare",
              "Punere în funcțiune & mentenanță",
            ].map((step, i) => (
              <li key={step} className="bg-background p-6 flex items-start gap-4">
                <span className="font-mono text-primary text-sm">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-lg">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="font-mono text-xs text-primary tracking-widest">// REFERINȚE</div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-tight">Selecție de proiecte</h2>
          </div>
          <Link to="/proiecte" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
            Toate proiectele <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.slice(0, 6).map((p) => (
            <article key={p.title} className="group relative aspect-[4/5] overflow-hidden rounded-md border border-border">
              <img src={imgMap[p.img]} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="font-mono text-[10px] tracking-widest text-primary">{p.tag}</div>
                <div className="mt-1 font-display text-lg">{p.title}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-balance">
              Unii vă arată ceea ce este evident.<br />
              <span className="text-gradient-cyan">Noi vă prezentăm oportunitățile.</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              "Audit tehnic gratuit pentru proiectele eligibile",
              "Echipă internă de proiectare mecanică, electrică și PLC",
              "Service & mentenanță pe întreg teritoriul României",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                <span className="text-foreground">{b}</span>
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-medium text-primary-foreground glow"
            >
              Începe un proiect <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
