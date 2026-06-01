import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, desc }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/10 cursor-default"
    >
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </motion.div>
  );
};

export default FeatureCard;