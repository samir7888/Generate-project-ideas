import { useState } from "react"
import { fetchIdeas } from "./getProject"
import { MangeResponse } from "../components/MangeResponse"
import { motion } from "framer-motion"

const GenerateProject = () => {
  const [techStack, setTechStack] = useState<string[]>([])
  const [tech, setTech] = useState<string>("")
  const [response, setResponse] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleGenerate = async () => {
    if (techStack.length === 0) return
    setLoading(true)
    const response = await fetchIdeas(techStack)
    setResponse(response)
    console.log(response)
    setLoading(false)
  }

  const handleAddTech = () => {
    if (tech && !techStack.includes(tech)) {
      setTechStack([...techStack, tech])
      setTech("")
    }
  }

  const handleRemoveTech = (index: number) => {
    const updated = [...techStack]
    updated.splice(index, 1)
    setTechStack(updated)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-gray-700 shadow-xl rounded-2xl p-6 mb-8"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Generate Project Ideas</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            onChange={(e) => setTech(e.target.value)}
            value={tech}
            type="text"
            placeholder="Enter a technology (e.g., React, Python)"
            className="flex-1 px-4 py-2 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTech}
            type="button"
            className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-xl transition"
          >
            Add Tech
          </button>
        </div>

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="relative bg-blue-600 text-white px-3 py-1 pr-6 rounded-full text-sm"
              >
                {tech}
                <button
                  className="absolute top-0 right-0 -mr-2 -mt-1 bg-red-600 hover:bg-red-700 text-xs w-5 h-5 rounded-full flex items-center justify-center"
                  onClick={() => handleRemoveTech(idx)}
                  title="Remove"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleGenerate}
          className="w-full bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-xl font-semibold mt-2"
        >
          {loading ? "Generating..." : "Generate Project"}
        </motion.button>
      </motion.div>

      {response && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-3xl bg-gray-700 p-6 rounded-2xl shadow-lg"
        >
          <MangeResponse text={response} />
        </motion.div>
      )}
    </div>
  )
}

export default GenerateProject
