import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-gradient-to-br from-primary to-accent font-display font-bold text-primary-foreground text-sm">E</span>
            <span className="font-display font-semibold">execon<span className="text-primary">.</span></span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Execon Engineering — soluții complete în robotică industrială, automatizări și energie regenerabilă, din 2010.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Companie</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/servicii" className="hover:text-primary">Servicii</Link></li>
            <li><Link to="/proiecte" className="hover:text-primary">Proiecte</Link></li>
            <li><Link to="/despre" className="hover:text-primary">Despre noi</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:office@execon.ro" className="hover:text-primary">office@execon.ro</a></li>
            <li>+40 743 05 88 61</li>
            <li>Cluj-Napoca · Brașov</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Execon Engineering S.R.L.</span>
          <span className="font-mono">RO · ENGINEERING SINCE 2010</span>
        </div>
      </div>
    </footer>
  );
}
