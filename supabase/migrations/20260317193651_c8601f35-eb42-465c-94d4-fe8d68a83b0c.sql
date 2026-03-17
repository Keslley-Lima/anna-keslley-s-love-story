
CREATE TABLE public.convidados (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  acompanhantes INTEGER NOT NULL DEFAULT 0,
  data_confirmacao TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.convidados ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert RSVP"
  ON public.convidados FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can read RSVPs"
  ON public.convidados FOR SELECT
  USING (true);
