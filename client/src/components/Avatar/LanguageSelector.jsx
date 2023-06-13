import React from "react";
import { Form } from "react-bootstrap";

const LanguageSelector = ({ options, languages, setOptions }) => {
  return (
    <Form.Group>
      <Form.Label>Language</Form.Label>
      <Form.Select
        onChange={(e) => setOptions({ ...options, language: e.target.value })}
      >
        {" "}
        <option value="">Select language</option>
        {languages &&
          languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
      </Form.Select>
    </Form.Group>
  );
};

export default LanguageSelector;
