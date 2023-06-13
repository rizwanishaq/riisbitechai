import React from "react";
import { Form } from "react-bootstrap";

const VoiceSelector = ({ voices, options, setOptions }) => {
  return (
    <Form.Group className="mt-2">
      <Form.Label>Voice</Form.Label>
      <Form.Select
        onChange={(e) => setOptions({ ...options, voice: e.target.value })}
      >
        <option value="">Select voice</option>
        {voices &&
          voices.map((voice) => (
            <option key={voice} value={voice}>
              {voice}
            </option>
          ))}
      </Form.Select>
    </Form.Group>
  );
};

export default VoiceSelector;
