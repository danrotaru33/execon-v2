import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/despre")({
  component: DesprePage,
  head: () => ({
    meta: [
      { title: "Despre noi — Execon Engineering" },
      { name: "description", content: "Execon Engineering S.R.L. dezvoltă și implementează soluții complete pentru clienți din Industrie și Energie." },
    ],
  }),
});

function DesprePage() {
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-xs text-primary tracking-widest">// DESPRE</div>
            <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight text-balance">
              O echipă de ingineri pasionați de <span className="text-gradient-cyan">execuție impecabilă</span>.
            </h1>
          </div>
          <p className="lg:col-span-4 text-muted-foreground">
            Structurată pe două divizii — Roboți & Linii de Fabricație și Energie —
            Execon oferă servicii integrate de proiectare, execuție, consultanță și
            transfer tehnologic.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden">
        {[
          { icon: Target, title: "Misiune", body: "Creșterea calității, eficienței și siguranței în procesele de producție ale clienților noștri." },
          { icon: Eye, title: "Viziune", body: "Creștere sustenabilă și poziție distinctă în piață, prin educație, transfer tehnologic și muncă." },
          { icon: Heart, title: "Valori", body: "Responsabilitate · Excelență · Inovație · Echipă." },
        ].map((v) => (
          <div key={v.title} className="bg-background p-10">
            <v.icon className="text-primary" size={28} strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
            <p className="mt-3 text-muted-foreground">{v.body}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="font-mono text-xs text-primary tracking-widest">// CONDUCERE</div>
          <h2 className="mt-2 font-display text-4xl tracking-tight">Parteneri executivi</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              { name: "Silviu Ștefănescu", role: "Managing Partner", initials: "SS" },
              { name: "Claudiu Rotaru", role: "Managing Partner", initials: "CR" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-5 rounded-md border border-border bg-background p-6">
                <div className="h-16 w-16 shrink-0 rounded-sm bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-semibold text-primary-foreground text-xl">
                  {p.initials}
                </div>
                <div>
                  <div className="font-display text-xl">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
