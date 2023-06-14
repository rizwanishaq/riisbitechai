import { createContext, useState } from "react";
export const AvatarContext = createContext();

const AvatarContextProvider = ({ children }) => {
  const [audioUrl, setAudioUrl] = useState("");
  const [avatar, setAvatar] = useState(
    "https://dialoga-machine-learning.s3.eu-west-1.amazonaws.com/mimic/videos/eduardo_bravo/eduardo_bravo_another.mp4"
  );
  const [hd, setHd] = useState(false);
  const [language, setLanguage] = useState("es-ES");
  const [voice, setVoice] = useState("UTESF2");

  return (
    <AvatarContext.Provider
      value={{
        avatar,
        setAvatar,
        audioUrl,
        setAudioUrl,
        hd,
        setHd,
        voice,
        language,
        setLanguage,
        setVoice,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export default AvatarContextProvider;
