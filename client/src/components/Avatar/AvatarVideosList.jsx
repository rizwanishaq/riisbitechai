import AvatarInfo from "./AvatarInfo";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useVideos } from "../../hooks/useVideos";
const AvatarVideosList = () => {
  const { data } = useVideos();

  return (
    <ButtonGroup
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "300px",
        overflowY: "auto",
      }}
    >
      {data && data.map((url) => <AvatarInfo key={url} video_url={url} />)}
    </ButtonGroup>
  );
};

export default AvatarVideosList;
