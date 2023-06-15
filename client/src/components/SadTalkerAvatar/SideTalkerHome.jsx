import React, { useState, useRef, useEffect } from "react";
import { Stack, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { GrAttachment } from "react-icons/gr";
import { BsFillSendFill } from "react-icons/bs";
import { useAvatar } from "../../hooks/useAvatar";

const SideTalkerHome = () => {
  const { voice, language } = useAvatar();
  const [image, setImage] = useState(null);
  const [avatarimage, setAvatarimage] = useState(null);
  const canvas_ref = useRef(undefined);
  const [audiourl, setAudioUrl] = useState("");

  const [options, setOptions] = useState({
    "text-content": "",
  });

  useEffect(() => {
    const getVideo = async () => {
      //   setProcesssing(true);
      const response = await fetch("/api/mimic/getAvatar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audio_url: audiourl,
          image: image.split(",")[1],
        }),
      });

      const responseData = await response.json();
      //   setAvatarVideo(responseData.response.video_url);
      //   setProcesssing(false);
    };
    if (audiourl != "") {
    }
  }, [audiourl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/tts/synthesis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: language,
        voice: voice,
        text: options["text-content"],
      }),
    });

    const responseData = await response.json();
    setAudioUrl(responseData.audio_url);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleContext = (e) => {
    const background_image = e.target;
    canvas_ref.current.width = background_image.width;
    canvas_ref.current.height = background_image.height;
    canvas_ref.current.hidden = true;
    canvas_ref.current.getContext("2d").drawImage(background_image, 0, 0);
    setAvatarimage(canvas_ref.current.toDataURL("image/jpeg"));
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Img src={image ? image : "i/empty.png"}></Card.Img>
      </Card.Body>
      <Form className="align-items-center mt-2" onSubmit={handleSubmit}>
        <Card.Body>
          <Form.Group className="mt-2 mb-1">
            <Form.Label>Text content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Please enter text content"
              onChange={(e) =>
                setOptions({ ...options, "text-content": e.target.value })
              }
            />
          </Form.Group>
        </Card.Body>
        <Card.Body>
          <Stack direction="horizontal" gap={3}>
            <Form.Group>
              <Form.Label
                htmlFor="file-upload"
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                <GrAttachment size={20} />
              </Form.Label>
              <Form.Control
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="d-none"
              />
            </Form.Group>

            <Button
              className="mb-1 mt-2 ms-auto"
              type="submit"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <BsFillSendFill size={20} />
              <span> &nbsp;Generate </span>
            </Button>
          </Stack>
        </Card.Body>
      </Form>
      <canvas ref={canvas_ref} />
      {image && (
        <img
          src={image}
          alt=""
          onLoad={handleContext}
          style={{ display: "none" }}
        />
      )}
    </Card>
  );
};

export default SideTalkerHome;
