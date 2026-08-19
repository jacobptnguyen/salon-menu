import { motion } from "framer-motion";
import CollectionCard from "./CollectionCard.jsx";

export default function Gallery({ collections }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="mx-auto min-h-screen max-w-2xl px-10 pb-16 pt-10"
    >
      <h1 className="text-center font-display text-[30px] font-semibold leading-tight text-black">
        LA Salon &amp; Spa
      </h1>

      {collections.length === 0 ? (
        <p className="mt-16 text-center font-display text-lg text-black">
          No collections to display yet
        </p>
      ) : (
        <div className="mt-10 space-y-12">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
