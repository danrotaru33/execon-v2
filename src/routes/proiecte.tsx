import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { projects } from "@/components/site/data";
import heroImg from "@/assets/hero-robot.jpg";
import energyImg from "@/assets/energy.jpg";
import factoryImg from "@/assets/factory.jpg";

export const Route = createFileRoute("/proiecte")({
  component: ProiectePage,
  head: () => ({
    meta: [
      { title: "Proiecte — Execon Engineering" },
      { name: "description", content: "Selecție de proiecte Execon: celule robotizate, automatizări automotive, centrale fotovoltaice și sisteme intra-logistice." },
    ],
  }),
});

const imgMap = { robot: heroImg, energy: energyImg, factory: factoryImg };

function ProiectePage() {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="font-mono text-xs text-primary tracking-widest">// REFERINȚE</div>
          <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight max-w-3xl text-balance">
            Proiecte care pun fabrica în mișcare.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <article key={p.title} className={`group relative overflow-hidden rounded-md border border-border ${i % 5 === 0 ? "lg:col-span-2 aspect-[16/10]" : "aspect-[4/5]"}`}>
              <img src={imgMap[p.img]} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-mono text-[10px] tracking-widest text-primary">{p.tag}</div>
                <div className="mt-1 font-display text-xl">{p.title}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
