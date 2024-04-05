import axios from "axios";
import React from "react";

function DisplayTest() {
  let data = JSON.stringify({
    collection: "products",
    database: "ecommerce",
    dataSource: "Cluster0",
    projection: {
      _id: 1,
      productName: 1,
      price: 1,
    },
  });

  var config = {
    method: "post",
    url:
      "https://us-west-2.aws.data.mongodb-api.com/app/data-arwwk/endpoint/data/v1/action/find",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
        "g8J6pkL6Koh0RvdZbeyX65EDEmprRXT8QEuwXoPe0evzhdYRPrD96BNFToyjKZP5",
    },
    data: data,
  };

  const test = axios(config)
    .then(function(response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function(error) {
      console.log(error);
    });

  return <div>{test.price}</div>;
}
