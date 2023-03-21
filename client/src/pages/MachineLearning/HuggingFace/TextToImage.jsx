import React, { useState } from "react";
import { Form, Button, Row, Col, Card, Nav } from "react-bootstrap";
import { useForm } from "react-hook-form";

import axios from "axios";

const TextToImage = () => {
  const [image, setImage] = useState("");
  const [processing, setProcessing] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setImage("");
    setProcessing(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/machinelearning/stable_diffusion",
        {
          prompt: `${data.prompt}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      const blob = new Blob([response.data], { type: "image/jpeg" });
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl);

      setProcessing(false);
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }

    reset();
  };
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Event Detection</h1>
        <Nav>
          <li className="breadcrumb-item"></li>
        </Nav>
      </div>

      <section className="section faq">
        <Row>
          <Col lg={6}>
            <Card className="basic">
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Write some prompt to generate the image
                    </Form.Label>
                    <Form.Control
                      type="text"
                      {...register("prompt", { required: true })}
                      placeholder="Enter a text ...."
                    />
                  </Form.Group>

                  <Button variant="dark" type="submit">
                    Generate
                  </Button>
                </Form>

                <image
                  src={processing ? "i/processing.gif" : image}
                  responsive="true"
                  className="mt-3 mb-50 mb-lg-0 img-fluid radius10"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default TextToImage;
