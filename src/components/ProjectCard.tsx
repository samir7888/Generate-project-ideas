import { motion } from "framer-motion";

type StepType = string | { type: "bash"; content: string };

type Project = {
  title: string;
  description: string;
  steps: StepType[];
};

export function EnhancedProjectCard({ title, description, steps }: Project) {
    console.log(title,description,steps)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-zinc-900 text-white rounded-2xl p-6 shadow-lg border border-zinc-700 w-full max-w-3xl"
    >
      <h2 className="text-2xl font-bold mb-2 text-lime-400">{title}</h2>
      <p className="text-zinc-300 mb-4">{description}</p>

      {/* <h3 className="font-semibold text-lg mb-2 text-white">Steps:</h3>
      <div className="space-y-4">
        {steps.map((step, idx) => {
          if (typeof step === "string") {
            return (
              <motion.p
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="text-zinc-300"
              >
                {step}
              </motion.p>
            );
          }

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-zinc-800 text-green-400 font-mono rounded-lg p-4 whitespace-pre-wrap border border-green-600 text-sm overflow-x-auto"
            >
              <span className="block pb-1 text-green-300"># Terminal</span>
              {step.content}
            </motion.div>
          );
        })}
      </div> */}
    </motion.div>
  );
}
