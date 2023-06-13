import React from "react";
import { Form } from "react-bootstrap";

const AvatarText = ({ setOptions, options }) => {
  return (
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
  );
};

export default AvatarText;
