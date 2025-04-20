import { EnhancedProjectCard } from "./ProjectCard";

export function MangeResponse({ text }:{text:string}) {
    const projects = parseGeminiResponse(text);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <EnhancedProjectCard key={idx} {...project} />
        ))}
      </div>
    );
  }
  


  
  function parseGeminiResponse(text: string) {
    // Match all project blocks using regex pattern
    const projectBlocks = text.split(/\*\*\d+\.\s(.+?)\*\*/g).slice(1);
  
    const projects = [];
  
    for (let i = 0; i < projectBlocks.length; i += 2) {
      const title = projectBlocks[i].trim();
      const block = projectBlocks[i + 1] ?? "";
  
      const descMatch = block.match(/\*\*Description:\*\*\s*(.*?)\*/s);
      let description = descMatch ? descMatch[1].trim() : "";
  
      // Remove trailing asterisk if it exists
      if (description.endsWith("*")) {
        description = description.slice(0, -1).trim();
      }
  
      const stepsMatch = block.match(/\*\*Steps:\*\*([\s\S]*)/);
      const stepsText = stepsMatch ? stepsMatch[1].trim() : "";
      const steps = stepsText
        .split(/\n\s*\d+\.\s/)
        .filter(step => step.trim())
        .map(step => step.replace(/\*/g, "").trim());
  
      projects.push({ title, description, steps });
    }
  
    return projects;
  }
  
  