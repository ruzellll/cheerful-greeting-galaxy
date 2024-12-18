import { motion } from "framer-motion";

interface GreetingCardProps {
  name: string;
  message: string;
}

export const GreetingCard = ({ name, message }: GreetingCardProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="greeting-card p-8 rounded-xl w-full max-w-md mx-auto text-center"
    >
      <h2 className="text-2xl font-bold mb-4 text-primary">
        From {name}
      </h2>
      <p className="text-lg leading-relaxed text-gray-700">
        {message}
      </p>
    </motion.div>
  );
};