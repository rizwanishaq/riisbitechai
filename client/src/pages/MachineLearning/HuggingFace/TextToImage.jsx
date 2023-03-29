import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Card, Nav, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useDevice } from "../../../hooks/useDevice";
import Carousel from "react-bootstrap/Carousel";

const TextToImage = () => {
  // Just to show the device-id
  const { device_info } = useDevice();

  const [image, setImage] = useState("");
  const [processing, setProcessing] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [prompt_image_pairs, setPrompt_Image_Pairs] = useState([]);

  useEffect(() => {
    const get_prompt_image_pairs = async () => {
      const response = await axios.get(
        "https://riisbitec.onrender.com/api/machinelearning/stable_diffusion"
      );
      setPrompt_Image_Pairs(response.data.prompt_image_pairs);
    };
    get_prompt_image_pairs();
  }, [image]);

  const onSubmit = async (data) => {
    setImage("");
    setProcessing(true);

    try {
      const response = await axios.post(
        "https://riisbitec.onrender.com/api/machinelearning/stable_diffusion",
        {
          prompt: `${data.prompt}`,
          device_uid: device_info.device_uid,
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
      // console.log(response.data.image_url);
      // setImage(response.data.image_url);

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
          <Col lg={6}>
            <Carousel fade>
              {prompt_image_pairs.map((item) => (
                <Carousel.Item key={`${item._id}`}>
                  <Card>
                    <Card.Img variant="top" src={item.image_url} />
                    <Card.Footer>{item.prompt}</Card.Footer>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default TextToImage;
