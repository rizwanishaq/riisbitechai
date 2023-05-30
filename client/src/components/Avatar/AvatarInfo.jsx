import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const AvatarInfo = ({ img_url, name }) => {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">{name}</Tooltip>}
    >
      <img src={img_url} width="15%" height="auto" className="img-thumbnail" />
    </OverlayTrigger>
  );
};

export default AvatarInfo;
