import { motion } from "motion/react"
import React from "react";

export default function WorkflowSection() {
  return (
    <section className="px-4 sm:px-8 md:px-12 py-16 md:py-24 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="block"
            >
              Enhance your workflows to
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="block"
            >
              maximize performance and take
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="block"
            >
              effective control of your time.
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="block"
            >
              Focus on what truly matters to
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              viewport={{ once: true }}
              className="block"
            >
              your business, while routine tasks
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="block"
            >
              run on autopilot with the help of
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="block text-gray-500"
            >
              our no-code and code-based
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="block text-gray-500"
            >
              solutions.
            </motion.span>
          </h2>
        </motion.div>

        <div className="mt-20">
          <p className="text-gray-400 mb-8">Trusted by high-performing companies</p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {[
              { name: "Tarscase", width: "120px" },
              { name: "Mine Work", width: "140px" },
              { name: "OPJE", width: "100px" },
              { name: "Old Yo", width: "80px" },
              { name: "Hamilton", width: "130px" },
              { name: "Signature", width: "110px" }
            ].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                viewport={{ once: true }}
                className="grayscale opacity-70 hover:opacity-100 transition-opacity"
                style={{ width: company.width }}
              >
                <div className="h-8 bg-gray-700 rounded-md"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}