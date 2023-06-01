import React, { useEffect } from "react";
import { useAvatar } from "../../hooks/useAvatar";

const PlaySound = () => {
  const { responseData, player, setError } = useAvatar();

  useEffect(() => {
    if (responseData.audio_contents != null) {
      try {
        player.current.feed(new Int8Array(responseData.audio_contents.data));
      } catch (error) {
        setError(error.message);
      }
    }
    // eslint-disable-next-line
  }, [responseData]);

  return <></>;
};

export default PlaySound;
