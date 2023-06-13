import React from "react";
import { Form, Stack } from "react-bootstrap";

const AvatarsList = ({ avatar, setAvatar, videos }) => {
  return (
    <Form.Group className="mt-2">
      <Form.Label>
        <Stack direction="horizontal" gap={3}>
          <Form.Group className="mt-1 ms-auto">
            <video
              src={avatar}
              width="15%"
              height="15%"
              className="img-thumbnail rounded-circle"
            ></video>
          </Form.Group>
          <span> &nbsp;Avatar</span>
        </Stack>
      </Form.Label>
      <Form.Select onChange={(e) => setAvatar(e.target.value)}>
        {videos &&
          videos.map((url) => (
            <option value={url} key={url}>
              <>{url.split("/").pop().replace(".mp4", "")}</>
            </option>
          ))}
      </Form.Select>
    </Form.Group>
  );
};

export default AvatarsList;
