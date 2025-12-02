import { useState } from "react";

export function useTextToSpeech() {
  const [speaking, setSpeaking] = useState(false);

  const speak = (text: string) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "pt-BR";
    utter.onstart = () => setSpeaking(true);
    utter.onend = () => setSpeaking(false);

    speechSynthesis.speak(utter);
  };

  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setSpeaking(false);
  };

  return { speak, stopSpeaking, speaking };
}
