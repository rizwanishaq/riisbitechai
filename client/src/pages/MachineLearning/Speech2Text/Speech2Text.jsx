import React, { useState, useEffect } from "react";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { toast } from "react-toastify";
import uuid from "react-uuid";
// import Select from "react-select";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";

import { FaMicrophoneAlt, FaMicrophoneSlash } from "react-icons/fa";

const Speech2Text = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();
  const { speak } = useSpeechSynthesis();
  const [notes, setNotes] = useState([]);

  // const [language, setLanguage] = useState("es-ES");

  // const options = [
  //   { value: "ar-EG", label: "Chocolate" },
  //   { value: "en-UK", label: "Strawberry" },
  //   { value: "en-US", label: "Vanilla" },
  // ];

  useEffect(() => {
    if (!listening && transcript !== "") {
      // Add note to notes array
      // we can send this to database as well
      speak({ text: transcript });
      setNotes([...notes, { text: transcript, _id: uuid() }]);
      resetTranscript();
    }
    // eslint-disable-line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listening]);

  if (!browserSupportsSpeechRecognition) {
    return <>{toast.error("Browser doesn't support speech recognition.")}</>;
  }
  if (!isMicrophoneAvailable) {
    return <>{toast.error("Microphone is not available.")}</>;
  }

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Voice Note </h1>
        <Nav>
          <li className="breadcrumb-item">
            The speech-to-text feature in the Chrome browser is a powerful tool
            that converts spoken words into written text, offering a convenient
            and efficient way to input information. By simply clicking the
            microphone icon on supported websites or applications, users can
            dictate their thoughts, compose emails, write documents, or perform
            various other tasks hands-free. The feature utilizes advanced voice
            recognition technology to accurately transcribe spoken words in
            real-time, enhancing productivity and accessibility for users.
            Whether it's for individuals with physical disabilities, those
            multitasking, or anyone looking for a convenient alternative to
            typing, the speech-to-text capability in Chrome browser opens up a
            world of possibilities, making communication and content creation
            easier than ever before.
          </li>
        </Nav>
      </div>
      <section className="section faq">
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <p>{transcript}</p>
                  <p>
                    {listening ? (
                      <>
                        <FaMicrophoneAlt
                          onClick={() => {
                            SpeechRecognition.stopListening();
                            toast.error("Stopped listening");
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <FaMicrophoneSlash
                          onClick={() => {
                            SpeechRecognition.startListening({
                              language: "en-US",
                              // continuous: true,
                            });
                            toast.success("Started listening");
                          }}
                        />
                      </>
                    )}
                  </p>
                  {/* <Select
                    options={options}
                    onChange={(e) => setLanguage(e.value)}
                  /> */}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <ListGroup>
                  {notes.map((note) => (
                    <ListGroupItem className="text-center" key={note._id}>
                      {note.text}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Speech2Text;
