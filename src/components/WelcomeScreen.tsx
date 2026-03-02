import { motion, AnimatePresence } from "framer-motion";

interface WelcomeScreenProps {
  onEnter: () => void;
  visible: boolean;
}

const WelcomeScreen = ({ onEnter, visible }: WelcomeScreenProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-script text-5xl sm:text-6xl text-gold mb-4"
          >
            A & K
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-sans-elegant text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-10"
          >
            17 · 04 · 2026
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            onClick={onEnter}
            className="rounded-full border border-gold px-8 py-3 font-sans-elegant text-xs font-medium uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Abrir Convite
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
