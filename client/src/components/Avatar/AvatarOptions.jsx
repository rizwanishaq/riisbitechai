import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillPersonFill } from "react-icons/bs";
import Stack from "react-bootstrap/Stack";
import { useVideos } from "../../hooks/useVideos";
import { useQuery } from "react-query";

const AvatarOptions = () => {
  const [options, setOptions] = useState({
    language: "english",
    character: "marta",
    "text-content": "",
    hd: false,
  });
  const [languages, setLanguages] = useState([]);

  const {} = useQuery("languages", async () => {
    const response = await fetch("http://localhost:5000/api/tts/languages");
    const responseData = await response.json();
    setLanguages(responseData.languages);

    return;
  });

  const { data, setAvatar, avatar } = useVideos();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(options);
  };

  return (
    <Card>
      <Card.Body className="pb-0">
        <Card.Title className="text-center">Avatar settings</Card.Title>
        <Form className="align-items-center mt-3" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Language</Form.Label>
            <Form.Select
              onChange={(e) =>
                setOptions({ ...options, language: e.target.value })
              }
            >
              {" "}
              {languages &&
                languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Voice</Form.Label>
            <Form.Select
              onChange={(e) =>
                setOptions({ ...options, character: e.target.value })
              }
            >
              <option value="Jenny">Jenny</option>
              <option value="Marta">Marta</option>
              <option value="Hubby">Hubby</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>
              <Stack direction="horizontal" gap={3}>
                <Form.Group className="mt-1 ms-auto">
                  <video
                    src={avatar}
                    width="15%"
                    height="15%"
                    className="img-thumbnail"
                  ></video>
                </Form.Group>
                <span> &nbsp;Avatar</span>
              </Stack>
            </Form.Label>
            <Form.Select onChange={(e) => setAvatar(e.target.value)}>
              {data &&
                data.map((url) => (
                  <option value={url} key={url}>
                    <>{url.split("/").pop().replace(".mp4", "")}</>
                  </option>
                ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mt-3 mb-3">
            <Form.Label>Text content</Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              placeholder="Please enter text content"
              onChange={(e) =>
                setOptions({ ...options, "text-content": e.target.value })
              }
            />
          </Form.Group>
          <Stack direction="horizontal" gap={3}>
            <Button
              className="mt-3 mb-3"
              type="submit"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <BsFillPersonFill size={20} />
              <span> &nbsp;Generate Avatar</span>
            </Button>
            <Form.Group className="mt-3 mb-3 ms-auto">
              <Form.Check
                type="switch"
                id="hd-switch"
                label="HD"
                checked={options.hd}
                onChange={(e) => {
                  setOptions({ ...options, hd: !options.hd });
                }}
              />
            </Form.Group>
          </Stack>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AvatarOptions;
