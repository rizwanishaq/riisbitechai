import React from "react";
import Container from "react-bootstrap/Container";
import AvatarInfo from "./AvatarInfo";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const AvatarVideosList = () => {
  return (
    <ButtonGroup
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "300px",
        overflowY: "auto",
      }}
    >
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
      <AvatarInfo img_url={"/assets/img/product-2.jpg"} name={"something"} />
    </ButtonGroup>
  );
};

export default AvatarVideosList;
