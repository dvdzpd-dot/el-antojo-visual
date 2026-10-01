import { createFileRoute } from "@tanstack/react-router";
import { Flame, MapPin, Phone, Clock } from "lucide-react";
import heroImg from "@/assets/hero-antojo.jpg";
import alitasImg from "@/assets/alitas.jpg";
import hamburguesaImg from "@/assets/hamburguesa.jpg";
import tacosImg from "@/assets/tacos.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Antojo | Alitas, Hamburguesas y Tacos" },
      {
        name: "description",
        content:
          "El Antojo: las mejores alitas, hamburguesas y tacos. Consulta precios, dirección y teléfono para pedir o visitar.",
      },
      { property: "og:title", content: "El Antojo | Alitas, Hamburguesas y Tacos" },
      {
        property: "og:description",
        content: "Alitas, hamburguesas y tacos con sabor a fuego. Precios, dirección y teléfono.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "El Antojo | Alitas, Hamburguesas y Tacos" },
      {
        name: "twitter:description",
        content: "Alitas, hamburguesas y tacos con sabor a fuego. Precios, dirección y teléfono.",
      },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "55 1234 5678";
const PHONE_TEL = "tel:+525512345678";
const ADDRESS = "Av. Ejemplo 123, Col. Centro, CDMX";
const HOURS = "Mar–Dom · 12:00 pm – 11:00 pm";

const ALITAS = [
  { name: "Alitas 6 pz", desc: "Buffalo, BBQ o mango-habanero", price: "$95" },
  { name: "Alitas 12 pz", desc: "Elige dos salsas", price: "$175" },
  { name: "Boneless 250 g", desc: "Con papas gajo", price: "$110" },
  { name: "Papas gajo", desc: "Con aderezo ranch", price: "$55" },
];

const HAMBURGUESAS = [
  { name: "La Antojo", desc: "Doble carne, queso, tocino y papas", price: "$120" },
  { name: "Clásica", desc: "Carne, queso amarillo, lechuga y jitomate", price: "$85" },
  { name: "Hawaiana", desc: "Carne, queso, piña asada y tocino", price: "$95" },
  { name: "Papas a la francesa", desc: "Grandes para compartir", price: "$45" },
];

const TACOS = [
  { name: "Taco al pastor", desc: "Con piña y cilantro", price: "$20" },
  { name: "Taco de asada", desc: "Con cebolla asada", price: "$25" },
  { name: "Gringa", desc: "Pastor, queso y tortilla de harina", price: "$35" },
  { name: "Volcán", desc: "Tortilla con queso fundido y carne", price: "$45" },
];

function MenuCard({
  title,
  image,
  items,
}: {
  title: string;
  image: string;
  items: { name: string; desc: string; price: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <img src={image} alt={title} loading="lazy" width={1200} height={912} className="h-52 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-display text-3xl text-mustard">{title}</h3>
        <ul className="mt-4 space-y-4">
          {items.map((item) => (
            <li key={item.name} className="flex items-baseline justify-between gap-3">
              <div>
                <p className="font-semibold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              <span className="font-display text-2xl text-primary">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Barra superior */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <span className="font-display text-3xl tracking-wide">
            EL <span className="text-gradient-fire">ANTOJO</span>
          </span>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-fire transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* Héroe */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Alitas, hamburguesas y tacos de El Antojo"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="relative z-10 px-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-background/60 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-ember">
            <Flame className="h-4 w-4" />
            Sabor a fuego
          </p>
          <h1 className="mt-4 font-display text-7xl leading-none sm:text-8xl md:text-9xl">
            EL <span className="text-gradient-fire">ANTOJO</span>
          </h1>
          <p className="mt-4 font-display text-3xl tracking-widest sm:text-4xl">
            ALITAS · HAMBURGUESAS · TACOS
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#menu"
              className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-fire transition-transform hover:scale-105"
            >
              Ver el menú
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/80 px-6 py-3 font-semibold transition-colors hover:bg-card"
            >
              <Phone className="h-4 w-4 text-ember" />
              Pedir por teléfono
            </a>
          </div>
        </div>
      </section>

      {/* Menú con precios */}
      <section id="menu" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="font-display text-5xl">NUESTRO MENÚ</h2>
          <div className="divider-flame mx-auto mt-3 w-48" />
          <p className="mt-3 text-muted-foreground">Precios en pesos mexicanos</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <MenuCard title="ALITAS" image={alitasImg} items={ALITAS} />
          <MenuCard title="HAMBURGUESAS" image={hamburguesaImg} items={HAMBURGUESAS} />
          <MenuCard title="TACOS" image={tacosImg} items={TACOS} />
        </div>
      </section>

      {/* Ubicación y contacto */}
      <section className="border-t border-border bg-smoke">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="rounded-xl bg-primary/15 p-3 text-primary">
              <MapPin className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-2xl">DIRECCIÓN</h3>
              <p className="mt-1 text-muted-foreground">{ADDRESS}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="rounded-xl bg-primary/15 p-3 text-primary">
              <Phone className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-2xl">TELÉFONO</h3>
              <a href={PHONE_TEL} className="mt-1 block text-lg font-semibold text-ember hover:text-mustard">
                {PHONE_DISPLAY}
              </a>
              <p className="text-sm text-muted-foreground">Pedidos a domicilio y para llevar</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="rounded-xl bg-primary/15 p-3 text-primary">
              <Clock className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-2xl">HORARIO</h3>
              <p className="mt-1 text-muted-foreground">{HOURS}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © 2026 El Antojo · Alitas, Hamburguesas y Tacos
      </footer>
    </div>
  );
}
