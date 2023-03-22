import React, { useState } from "react";
import { Form, Button, Row, Col, Card, Nav, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
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
      const base64_image = response.data.image_base64;
      const imageUrl = `data:image/jpg;base64,${base64_image}`;
      setImage(imageUrl);
      setProcessing(false);
    } catch (error) {
      toast.error("Unable to generate image (limit/error)");
      setProcessing(false);
    }

    reset();
  };
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Stable Diffusion HuggingFace</h1>
        <Nav>
          <li className="breadcrumb-item"></li>
        </Nav>
      </div>

      <section className="section faq">
        <Row>
          <Col lg={6}>
            <Card className="basic">
              <Card.Img
                variant="top"
                src={processing ? "i/processing.gif" : image}
              />
              <Card.Body>
                <Form
                  className="search-form d-flex align-items-center mt-3"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="text"
                      {...register("prompt", { required: true })}
                      placeholder="Write some prompt to generate the image ...."
                    />
                    <Button type="submit">Generate Image</Button>
                  </InputGroup>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default TextToImage;
