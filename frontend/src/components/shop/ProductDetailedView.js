import axios from "axios";
import * as Constants from "../../constants.js";
import React, { useEffect, useState } from "react";

const ProductDetailedView = () => {
  let url = window.location.href;
  url = url.split("/");
  const id = url[url.length - 1];
  const [dataReady, setDataReady] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!dataReady) {
      axios
        .post(`${Constants.API_BASE_URL}/getProductById/`, { id })
        .then((r) => {
          const data = r.data;
          setProduct(data);
          console.log(product);
        });
    }
  }, [dataReady]);
  return <div>product</div>;
};

export default ProductDetailedView;
