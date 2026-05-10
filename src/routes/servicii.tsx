import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/servicii")({
  component: ServiciiPage,
  head: () => ({
    meta: [
      { title: "Servicii — Execon Engineering" },
      { name: "description", content: "Roboți industriali, AGV, celule de fabricație, sisteme VISION, marcare, ambalare, depozitare WMS și energie regenerabilă." },
    ],
  }),
});

function ServiciiPage() {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="font-mono text-xs text-primary tracking-widest">// SERVICII</div>
          <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight max-w-3xl text-balance">
            Soluții complete de inginerie industrială.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            De la analiză și proiectare la execuție și mentenanță, acoperim întregul
            ciclu de viață al unui proiect industrial sau energetic.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden border border-border">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-8 hover:bg-surface transition-colors">
              <s.icon className="text-primary" size={32} strokeWidth={1.5} />
              <h2 className="mt-6 font-display text-2xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-md border border-border bg-surface/40 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl">Ai un proiect în minte?</h3>
            <p className="text-muted-foreground mt-2">Trimite-ne specificațiile și revenim cu o evaluare în 48h.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-medium text-primary-foreground glow">
            Cere o ofertă <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
