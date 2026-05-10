import { Bot, Workflow, ArrowUpDown, Boxes, ScanSearch, Tag, Package, Warehouse, Sun } from "lucide-react";

export const services = [
  { icon: Bot, title: "Roboți industriali", desc: "Integrare roboți: analiza procesului, proiectare, simulare, execuție, punere în funcțiune și mentenanță." },
  { icon: Workflow, title: "Conveioare & AGV", desc: "Sisteme de transport cu bandă, lanț, role sau AGV — suspendate sau la sol, cu acumulare și module customizate." },
  { icon: ArrowUpDown, title: "Ridicare / Manipulare", desc: "Poduri rulante, macarale portal, electropalane, brațe zero-gravity, mese de ridicat și elevatoare." },
  { icon: Boxes, title: "Celule & Posturi de fabricație", desc: "Posturi echipate pentru înșurubare, lipire, sudare, vopsire, uscare, debitare și operații custom." },
  { icon: ScanSearch, title: "Măsurare & Inspecție", desc: "Sisteme VISION, măsurători electrice și neelectrice, testare semifabricate cu buletine automate." },
  { icon: Tag, title: "Marcare & Trasabilitate", desc: "Inkjet, laser, RFID, etichetare și sisteme de marcare prin puncte sau electro-chimic." },
  { icon: Package, title: "Ambalare / Dezambalare", desc: "Stații de paletizare, înfoliere, dozare și ambalare în cutii, lăzi sau navete." },
  { icon: Warehouse, title: "Depozitare & WMS", desc: "Sisteme pentru paleți, picking, shuttle și soluții integrate Warehouse Management." },
  { icon: Sun, title: "Energie regenerabilă", desc: "Centrale fotovoltaice industriale — de la 2 MW la 21+ MW, EPC și mentenanță." },
] as const;

export const projects = [
  { title: "CEF Miercurea Sibiului", tag: "Energie · 21 MW", img: "energy" },
  { title: "Linie automatizată automotive", tag: "Industrie · Roboți", img: "factory" },
  { title: "Celulă robotizată sudură", tag: "Industrie · Robotică", img: "robot" },
  { title: "CEF Săcel", tag: "Energie · 2 MW", img: "energy" },
  { title: "Stație paletizare & înfoliere", tag: "Logistică", img: "factory" },
  { title: "Sistem AGV intra-logistică", tag: "Industrie · AGV", img: "factory" },
] as const;
