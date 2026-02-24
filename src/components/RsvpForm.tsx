import { useState } from "react";
import { toast } from "sonner";

const RsvpForm = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Por favor, insira seu nome.");
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
          Sua presença foi confirmada com sucesso.
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
        className="w-full rounded-md bg-primary px-6 py-3 font-sans-elegant text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
      >
        Confirmar Presença
      </button>
    </form>
  );
};

export default RsvpForm;
