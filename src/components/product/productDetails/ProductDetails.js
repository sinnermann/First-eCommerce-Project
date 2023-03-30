import React, { useEffect, useState } from "react";
import styles from "./ProductDetails.module.scss";
import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    } else {
    }
  };

  return <div>ProductDetails</div>;
};

export default ProductDetails;
