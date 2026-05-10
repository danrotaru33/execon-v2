import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Execon Engineering" },
      { name: "description", content: "Contactează echipa Execon Engineering. Birouri în Cluj-Napoca și Brașov." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="font-mono text-xs text-primary tracking-widest">// CONTACT</div>
          <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight max-w-3xl text-balance">
            Hai să construim ceva împreună.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Spune-ne despre proiectul tău. Revenim cu o evaluare tehnică în 48 de ore.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          {[
            { icon: Mail, label: "Email", value: "office@execon.ro", href: "mailto:office@execon.ro" },
            { icon: Phone, label: "Telefon", value: "+40 743 05 88 61 · +40 744 60 83 22", href: "tel:+40743058861" },
            { icon: MapPin, label: "Birouri", value: "Str. Clăbucet nr. 2, Cluj-Napoca · Str. Verii nr. 4, Brașov" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4">
              <c.icon className="text-primary mt-1 shrink-0" size={22} strokeWidth={1.5} />
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                {c.href ? (
                  <a href={c.href} className="mt-1 block text-foreground hover:text-primary">{c.value}</a>
                ) : (
                  <div className="mt-1 text-foreground">{c.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-7 rounded-md border border-border bg-surface/40 p-8 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Nume" name="name" required />
            <Field label="Companie" name="company" />
            <Field label="Email" name="email" type="email" required />
            <Field label="Telefon" name="phone" />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Mesaj</label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-sm bg-background border border-input px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-medium text-primary-foreground glow hover:translate-y-[-1px] transition"
          >
            Trimite mesajul <ArrowRight size={16} />
          </button>
          {sent && (
            <p className="text-sm text-primary">Mulțumim! Vom reveni în cel mult 48h.</p>
          )}
        </form>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm bg-background border border-input px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
