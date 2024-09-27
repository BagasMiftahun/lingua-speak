import { useEffect, useState } from "react";
import OpenAI from "openai"; 

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

const useTranslate = (sourceText: string, selectedLanguage: string): string => {
  const [targetText, setTargetText] = useState<string>("");

  useEffect(() => {
    const handleTranslate = async (sourceText: string) => {
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Translate the following sentence into ${selectedLanguage}: ${sourceText}.`,
            },
          ],
        });

        const data = response.choices[0]?.message.content ?? ""; // Fallback to empty string
        setTargetText(data);
      } catch (error) {
        console.error("Error translating text:", error);
        setTargetText(""); // Reset text to empty string on error
      }
    };

    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]);

  return targetText;
};

export default useTranslate;
