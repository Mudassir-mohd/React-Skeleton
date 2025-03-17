import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Spinner from "./Spinner";
import SkeletonLoader from "./SkeletonLoader";

export default function LoaderExample() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {loading ? (
        <div className="space-y-4" aria-busy="true">
          <Spinner />
          <SkeletonLoader />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold text-gray-800">Content Loaded</h2>
          <p className="text-gray-600">Here is the actual content after loading.</p>
        </motion.div>
      )}
    </div>
  );
}
