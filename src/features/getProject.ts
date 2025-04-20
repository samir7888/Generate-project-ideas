


export const fetchIdeas = async (techStack:string[]) => {
    const prompt = `Suggest 4 beginner-friendly project ideas using ${techStack.join(", ")}. Give a description and 3-5 steps for each.`;
  
    const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDWI6IGpxcgpyMDxPC18nBoGQVCOUVF-B4", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      }),
    });
  
    const data = await res.json();
    const responseText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return responseText;
  };

//don't misuse the my gemini key please🥹
  
