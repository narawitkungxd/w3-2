import React from "react";
import { Card, Image } from "antd";

function CardProduct(props) {
  return (
    <Card title={props.data.titel}>
      <Image src={props.data.url} />
      <p>{props.data.des}</p>
    </Card>
  );
}

export default CardProduct;
