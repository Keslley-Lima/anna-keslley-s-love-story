import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import RsvpForm from "@/components/RsvpForm";
import MusicButton, { startMusic } from "@/components/MusicButton";
import WelcomeScreen from "@/components/WelcomeScreen";
import { MapPin } from "lucide-react";

const Divider = () => <div className="gold-divider my-10" />;

const LocationCard = ({
  title,
  name,
  address,
  mapsUrl,
  time,
  note,
}: {title: string; name: string; address: string; mapsUrl: string; time?: string; note?: string;}) =>
<div className="flex-1 rounded-xl bg-cream-dark p-6 text-center">
    <p className="font-sans-elegant text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-2">
      {title}
    </p>
    <p className="font-serif-elegant text-lg font-semibold text-foreground mb-1">{name}</p>
    <p className="font-sans-elegant text-xs leading-relaxed text-muted-foreground mb-2">
      {address}
    </p>
    {time && (
      <p className="font-sans-elegant text-xs leading-relaxed text-muted-foreground mb-2">
        {time}
      </p>
    )}
    {note && (
      <p className="font-sans-elegant text-[11px] italic leading-relaxed text-muted-foreground mb-4">
        {note}
      </p>
    )}
    {!note && !time && <div className="mb-2" />}
    <a
    href={mapsUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 rounded-full border border-gold px-5 py-2 font-sans-elegant text-xs font-medium uppercase tracking-widest text-gold transition-all duration-300 hover:bg-primary hover:text-primary-foreground mt-2">
      <MapPin size={14} />
      Como chegar
    </a>
  </div>;


const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero - Video */}
      <section className="relative flex flex-col items-center px-4 pt-6 pb-8">
        <FadeInSection className="w-full max-w-lg">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <video
              className="w-full aspect-[9/16] object-cover"
              controls
              playsInline
              preload="metadata"
              poster="">

              <source
                src="https://keslley-lima.github.io/bms-ads/Casamento.mp4"
                type="video/mp4" />

            </video>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3} className="mt-6 text-center">
          <p className="font-sans-elegant text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Nós vamos nos casar!
          </p>
        </FadeInSection>
      </section>

      <Divider />

      {/* Nomes */}
      <section className="px-4 text-center">
        <FadeInSection>
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-gold leading-tight">
            Anna Flávia
          </h1>
          <p className="font-serif-elegant text-2xl text-muted-foreground my-1">&</p>
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-gold leading-tight">
            Keslley Henrique  
          </h1>
        </FadeInSection>
      </section>

      <Divider />

      {/* Data */}
      <section className="px-4 text-center">
        <FadeInSection>
          <p className="font-sans-elegant text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2">
            Salve a data
          </p>
          <p className="font-serif-elegant text-3xl sm:text-4xl font-light text-foreground">
            17 de Abril de 2026
          </p>
        </FadeInSection>
      </section>

      <Divider />

      {/* Locais */}
      <section className="px-4">
        <FadeInSection>
          <p className="font-sans-elegant text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6 text-center">
            Onde será
          </p>
        </FadeInSection>
        <div className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
          <FadeInSection className="flex-1" delay={0.1}>
            <LocationCard
              title="Cerimônia Civil"
              name="Cartório de Registro Civil Uberlândia"
              address="Avenida Anselmo Alves dos Santos, 1111 – 4° Piso – Pátio Sabiá – Uberlândia-MG"
              time="Início às 10h15"
              mapsUrl="https://www.google.com/maps/search/?api=1&query=Cartório+de+Registro+Civil+Uberlândia+Avenida+Anselmo+Alves+dos+Santos+1111" />

          </FadeInSection>
          <FadeInSection className="flex-1" delay={0.25}>
            <LocationCard
              title="Recepção"
              name="Churrasqueira Potência do Sul"
              address="Av. Rondon Pacheco, 4845 - Nossa Sra. Aparecida, Uberlândia - MG"
              time="Início às 12h"
              note="Para celebrarmos juntos este momento tão especial, optamos por um almoço por adesão, onde cada convidado será responsável pelo seu próprio consumo. Ficaremos honrados em ter você dividindo essa alegria conosco!"
              mapsUrl="https://www.google.com/maps/search/?api=1&query=Churrasqueira+Potência+do+Sul+Av+Rondon+Pacheco+4845+Uberlândia" />

          </FadeInSection>
        </div>
      </section>

      <Divider />

      {/* RSVP */}
      <section className="px-4 pb-24">
        <FadeInSection>
          <p className="font-sans-elegant text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2 text-center">
            RSVP
          </p>
          <p className="font-serif-elegant text-3xl text-center text-foreground mb-8">
            Confirme sua presença
          </p>
          <RsvpForm />
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="font-script text-2xl text-gold">A & K</p>
        <p className="font-sans-elegant text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
          17 · 04 · 2026
        </p>
      </footer>

      <MusicButton />
    </div>);

};

export default Index;