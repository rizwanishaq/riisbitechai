import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import * as tf from "@tensorflow/tfjs";
import Button from "react-bootstrap/Button";
import { FaMicrophoneAlt, FaMicrophoneSlash } from "react-icons/fa";
import ProcessAudio from "./ProcessAudio";

const EventDetection = () => {
  //   Constant for APP
  const MODEL_URL = "https://tfhub.dev/google/tfjs-model/yamnet/tfjs/1";
  const CLASS_MAP_URL =
    "https://raw.githubusercontent.com/rizwanishaq/event-detection-tensorflow/main/src/yamnet_class_map.csv";

  const [labels, setLabels] = useState({});
  const [model, setModel] = useState(null);
  const [start, setStart] = useState(false);
  const [top5, setTop5] = useState([]);

  useEffect(() => {
    fetch(CLASS_MAP_URL)
      .then((response) => response.text())
      .then((json) => {
        const labelarray = json.split("\n");
        // eslint-disable-next-line
        labelarray.map((array) => {
          const split = array.split(",");

          if (split[0] !== "index" && split !== undefined) {
            setLabels((prevState) => ({
              ...prevState,
              [split[0]]: split[2],
            }));
          }
        });
      });
  }, []);

  useEffect(() => {
    const loadModel = async () => {
      const model = await tf.loadGraphModel(MODEL_URL, {
        fromTFHub: true,
      });
      setModel(model);
    };
    loadModel();
  }, []);

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Event Detection</h1>
        <Nav>
          <li className="breadcrumb-item">
            TensorFlow.js enables developers to create custom machine learning
            models for real-time audio analysis in the browser. With the ability
            to recognize and classify audio events such as speech, music, and
            environmental sounds, this technology has diverse applications
            including voice assistants, music streaming services, and smart home
            devices. Its high-level API simplifies the process of building and
            training neural networks, making it a valuable tool for any
            developer.
          </li>
        </Nav>
      </div>

      <section className="section faq">
        <Row>
          <Col lg={6}>
            <Card className="basic">
              <Card.Body>
                <Card.Title>
                  {!model ? (
                    <>
                      <Button variant="primary" disabled>
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Loading model ...
                      </Button>
                    </>
                  ) : (
                    <>
                      {`Press microphone to ${start ? "stop " : "start "}`}
                      {start ? (
                        <>
                          <FaMicrophoneSlash
                            onClick={() => {
                              setStart(false);
                            }}
                          />
                        </>
                      ) : (
                        <FaMicrophoneAlt onClick={() => setStart(true)} />
                      )}
                    </>
                  )}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card>
              <Card.Body>
                <Card.Title>Detected Events</Card.Title>
                {start && (
                  <ProcessAudio
                    labels={labels}
                    model={model}
                    top5={top5}
                    setTop5={setTop5}
                  />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default EventDetection;
