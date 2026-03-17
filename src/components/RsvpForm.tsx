import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const RsvpForm = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Por favor, insira seu nome.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("convidados").insert({
      nome: name.trim(),
      acompanhantes: parseInt(guests, 10),
    });
    setLoading(false);
    if (error) {
      toast.error("Ocorreu um erro. Tente novamente.");
      return;
    }
    setSubmitted(true);
    toast.success("Presença confirmada! Obrigado 💛");
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <p className="font-script text-3xl text-gold mb-2">Obrigado!</p>
        <p className="font-sans-elegant text-muted-foreground text-sm">
          Sua presença foi confirmada com sucesso! Estamos muito felizes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-5">
      <div>
        <label htmlFor="name" className="font-sans-elegant text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1.5 block">
          Nome Completo
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome completo"
          className="w-full rounded-md border border-gold bg-background px-4 py-3 font-serif-elegant text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
      </div>
      <div>
        <label htmlFor="guests" className="font-sans-elegant text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1.5 block">
          Quantas pessoas vão com você?
        </label>
        <select
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full rounded-md border border-gold bg-background px-4 py-3 font-serif-elegant text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition appearance-none"
        >
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n === 0 ? "Somente eu" : `+${n} pessoa${n > 1 ? "s" : ""}`}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-primary px-6 py-3 font-sans-elegant text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Confirmar Presença"}
      </button>
    </form>
  );
};

export default RsvpForm;
