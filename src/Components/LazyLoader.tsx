import { useInView } from "react-intersection-observer";
import { Suspense, ReactNode } from "react";
import { motion } from "framer-motion";

type LazyLoaderProps = {
  children: ReactNode;
};

function LazyLoader({ children }: LazyLoaderProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="mt-10">
      {inView && (
        <Suspense fallback={<div className="text-center mt-4">Loading...</div>}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoader;
