import React from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";

const AvatarButtons = ({ options, setHd, hd }) => {
  return (
    <Stack direction="horizontal" gap={3}>
      <Button
        className="mb-1 mt-2"
        type="submit"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <BsFillPersonFill size={20} />
        <span> &nbsp;Generate Avatar</span>
      </Button>

      <Form.Group className="mt-2 mb-1 ms-auto">
        <Form.Check
          type="switch"
          id="hd-switch"
          label="HD"
          checked={options.hd}
          onChange={(e) => {
            setHd(!hd);
          }}
        />
      </Form.Group>
    </Stack>
  );
};

export default AvatarButtons;
